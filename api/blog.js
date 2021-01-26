import request from '@/utils/request'

export function list(params) {
  return request({
    url: '/api/koa-blog/blog',
    params,
  })
}
export function detail(id) {
  return request({
    url: `/api/koa-blog/blog/${id}`,
    params: { id },
  })
}
