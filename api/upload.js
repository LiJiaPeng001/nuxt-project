import request from '@/utils/request'
import authority from '@/utils/authority'

export const uploadToken = async () => {
  let { qnToken = '' } = authority.get() || {}
  if (!qnToken) {
    let { token } = await request({
      url: '/api/common-user/uploadToken',
      method: 'post',
    })
    qnToken = token
    authority.set({ qnToken: token })
  }
  return qnToken
}

export function upload(data) {
  return request({
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    url: '/api/common-user/upload',
    method: 'post',
    data
  })
}
