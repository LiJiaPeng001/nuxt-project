import * as qiniu from 'qiniu-js'
import { uploadToken } from '@/api/upload'
import authority from '@/utils/authority'
import $loading from '@/utils/$loading'
import md5 from 'js-md5'

let input

const readFileMd5 = (file) => {
  let fileReader = new FileReader()
  fileReader.readAsBinaryString(file)
  return new Promise((resolve, reject) => {
    try {
      fileReader.onload = (e) => {
        const md5Key = md5(e.target.result)
        resolve(md5Key)
      }
    } catch (error) {
      reject(error)
    }
  })
}

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

export async function upload({ file }) {
  let { qnToken } = authority.get()
  let key = await readFileMd5(file)
  let token = qnToken
  let putExtra = {}
  let config = { useCdnDomain: true }
  const observable = qiniu.upload(file, key, token, putExtra, config)
  return new Promise((resolve, reject) => {
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
  return new Promise((resolve) => {
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
  })
}

export default startUpload
