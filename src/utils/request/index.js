import authority from '@/utils/authority'
import requestApi from './axios'

export default function(options = {}, configs = {}) {
  const user = authority.get()
  if (user.token) {
    options.headers = {
      Authorization: `bearer ${user.token}`,
    }
  }
  return requestApi(options, configs)
}
