import Axios from 'axios'
import authority from '@/utils/authority'
import { message } from 'ant-design-vue'
import $login from '../$login'
import { getErrMsg, getErrStatus } from './status'
import { baseURL } from '@/contants'

const instance = Axios.create({
  baseURL,
})

export default async (
  options = {
    method: 'get',
    data: {},
    params: {},
  },
  { shouldLogin = false }
) => {
  if (shouldLogin) {
    const user = authority.get()
    if (!user.token) return $login()
  }
  try {
    const response = await instance(options)
    const { data = {} } = response
    return data.data || {}
  } catch (e) {
    const status = getErrStatus(e)
    const info = getErrMsg(e)
    if (status === 401) {
      return $login()
    }
    message.error(info)
    return Promise.reject(info)
  }
}
