import * as qiniu from "qiniu-js";
import SparkMD5 from "spark-md5";
import { uploadToken } from "@/api/upload";
import authority from "@/utils/authority";
import $loading from "@/plugins/$loading";

let input;

export function createElement(options = {}) {
  if (!input) {
    input = document.createElement("input");
    input.type = "file";
    input.multiple = options.multiple;
    input.accept = "image/*";
    input.style.position = "fixed";
    input.style.top = "-1000px";
    document.body.append(input);
  }
  input.value = null;
  input.click();
}

export function getFileMD5(file) {
  return new Promise((resolve, reject) => {
    let blobSlice =
      File.prototype.slice ||
      File.prototype.mozSlice ||
      File.prototype.webkitSlice;
    let chunkSize = 2097152;
    let chunks = Math.ceil(file.size / chunkSize);
    let currentChunk = 0;
    let spark = new SparkMD5.ArrayBuffer();
    let fileReader = new FileReader();
    fileReader.onload = function(e) {
      console.log("read chunk nr", currentChunk + 1, "of", chunks);
      spark.append(e.target.result); // Append array buffer
      currentChunk++;
      if (currentChunk < chunks) {
        loadNext();
      } else {
        console.log("finished loading");
        resolve(spark.end());
      }
    };
    fileReader.onerror = function(err) {
      reject(err);
    };
    function loadNext() {
      let start = currentChunk * chunkSize;
      let end = start + chunkSize >= file.size ? file.size : start + chunkSize;
      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
    }
    loadNext();
  });
}

export async function upload({ file }) {
  let { qnToken = "" } = authority.get();
  if (!qnToken) qnToken = await uploadToken();
  let key = await getFileMD5(file);
  key = key + file.name.slice(file.name.lastIndexOf("."));
  return new Promise((resolve, reject) => {
    let token = qnToken;
    let putExtra = {};
    let config = { useCdnDomain: true };
    const observable = qiniu.upload(file, key, token, putExtra, config);
    observable.subscribe({
      next({ uploadInfo = {}, total = {} }) {
        console.log(uploadInfo, total);
      },
      error(err) {
        reject(err);
      },
      complete(res) {
        resolve(res);
      }
    });
  });
}

export function startUpload(options = { limit: 1 }) {
  options.multiple = options.limit > 1;
  createElement(options);
  return new Promise(resolve => {
    input.onchange = async function() {
      await uploadToken();
      let imageInfo = [];
      $loading.show();
      let files = [...input.files].slice(0, options.limit);
      for (let index = 0; index < files.length; index++) {
        const item = files[index];
        const data = await upload({ file: item });
        imageInfo.push(data);
      }
      $loading.hide();
      resolve(imageInfo);
    };
  });
}

export default startUpload;
