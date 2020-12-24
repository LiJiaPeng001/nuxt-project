import Axios from 'axios'
import authority from '@/utils/authority'
import { message } from 'ant-design-vue'
import { getErrMsg, getErrStatus } from './status'

const instance = Axios.create({})

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
    if (!user.token) console.log('login')
  }
  try {
    const response = await instance(options)
    const { data = {} } = response
    return data.data || {}
  } catch (e) {
    const status = getErrStatus(e)
    const info = getErrMsg(e)
    if (status === 401) {
      return console.log('login')
    }
    if (process.server) console.error(info)
    else message.error(info)
    Promise.reject(info)
  }
}
