import request from '@/utils/request'

export function list() {
  return request({
    url: '/api/koa-blog/cate',
  })
}
