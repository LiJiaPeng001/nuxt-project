import * as qiniu from 'qiniu-js'
import SparkMD5 from 'spark-md5'
import { uploadToken } from '@/api/upload'
import authority from '@/utils/authority'
import $loading from '@/plugins/$loading'

let input

export function createElement(options = {}) {
  if (!input) {
    input = document.createElement('input')
    input.type = 'file'
    input.multiple = options.multiple
    input.accept = 'image/*'
    input.style.position = 'fixed'
    input.style.top = '-1000px'
    document.body.append(input)
  }
}

export async function getFileMD5(file) {
  return new Promise((resolve, reject) => {
    var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice,
      chunkSize = 2097152, // Read in chunks of 2MB
      chunks = Math.ceil(file.size / chunkSize),
      currentChunk = 0,
      spark = new SparkMD5.ArrayBuffer(),
      fileReader = new FileReader()
    fileReader.onload = function(e) {
      console.log('read chunk nr', currentChunk + 1, 'of', chunks)
      spark.append(e.target.result) // Append array buffer
      currentChunk++
      if (currentChunk < chunks) {
        loadNext()
      } else {
        console.log('finished loading')
        resolve(spark.end())
      }
    }
    fileReader.onerror = function() {
      reject('获取MD5失败')
    }
    function loadNext() {
      var start = currentChunk * chunkSize,
        end = start + chunkSize >= file.size ? file.size : start + chunkSize
      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end))
    }
    loadNext()
  })
}

export async function upload({ file }) {
  let { qnToken } = authority.get()
  let key = await getFileMD5(file)
  key = key + file.name.slice(file.name.lastIndexOf('.'))
  return new Promise((resolve, reject) => {
    let token = qnToken
    let putExtra = {}
    let config = { useCdnDomain: true }
    const observable = qiniu.upload(file, key, token, putExtra, config)
    observable.subscribe({
      next({ uploadInfo = {}, total = {} }) {
        console.log(uploadInfo, total)
      },
      error(err) {
        reject(err)
      },
      complete(res) {
        resolve(res)
      },
    })
  })
}

export async function startUpload(options = { limit: 1 }) {
  options.multiple = options.limit > 1 ? true : false
  createElement(options)
  input.value = null
  input.click()
  return new Promise(async (resolve) => {
    input.onchange = async function() {
      await uploadToken()
      let imageInfo = []
      $loading.show()
      let files = [...input.files].slice(0, options.limit)
      for (let index = 0; index < files.length; index++) {
        const item = files[index]
        const data = await upload({ file: item })
        imageInfo.push(data)
      }
      $loading.hide()
      resolve(imageInfo)
    }
    input.onfocus = function() {
      console.log(222)
    }
  })
}

export default startUpload
