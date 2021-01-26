import Vue from 'vue'
import Axios from 'axios'
import authority from '@/utils/authority'
import { message } from 'ant-design-vue'
import { getErrMsg, getErrStatus } from './status'

const instance = Axios.create({
  baseURL: process.client ? '' : process.env.baseURL,
})

export default async (
  options = {
    method: 'get',
    data: {},
    params: {},
  },
  { shouldLogin = false }
) => {
  return new Promise(async (resolve, reject) => {
    if (shouldLogin) {
      const user = authority.get()
      if (!user.token) await Vue.prototype.$login()
    }
    try {
      const response = await instance(options)
      const { data = {} } = response
      resolve(data.data || {})
    } catch (e) {
      const status = getErrStatus(e)
      const info = getErrMsg(e)
      if (status === 401) {
        return Vue.prototype.$login()
      }
      if (process.server) console.error(info)
      else message.error(info)
      reject(info)
    }
  })
}
