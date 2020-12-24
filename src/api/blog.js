import request from '@/utils/request'

export const add = async (data) => {
  return request(
    {
      url: '/api/blog',
      method: 'post',
      data,
    },
    {
      shouldLogin: true,
    }
  )
}
export const list = function(params) {
  return request({
    url: '/api/blog',
    params,
  })
}
