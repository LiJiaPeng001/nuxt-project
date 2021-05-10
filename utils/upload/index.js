import SparkMD5 from "spark-md5";
import * as Api from "@/api/upload";
import $loading from "@/plugins/$loading";

let input;

export function getFiles(options = {}) {
  return new Promise(resolve => {
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
    input.onchange = function() {
      resolve(input.files);
    };
  });
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
  let key = await getFileMD5(file);
  let formdata = new FormData();
  formdata.append("file", file);
  formdata.append("name", key + file.type.replace(/image\//gi, "."));
  let data = await Api.upload(formdata);
  return data;
}

export async function startUpload(options = { limit: 1 }) {
  options.multiple = options.limit > 1;
  let files = await getFiles();
  let imageInfo = [];
  $loading.show();
  files = [...files].slice(0, options.limit);
  for (let index = 0; index < files.length; index++) {
    const item = files[index];
    const data = await upload({ file: item });
    imageInfo.push(data);
  }
  $loading.hide();
  return imageInfo;
}

export default startUpload;
