/*
 * @Author: luzhongk@126.com
 * @Date: 2020-12-11 15:21:08
 */
import request from '@/utils/request'

export const changeStatus = async (item) => {
  let url = item.follow ? '/api/user-relation/noFollow' : '/api/user-relation/follow'
  return request(
    {
      url,
      method: 'post',
      data: { id: item.user.id },
    },
    {
      shouldLogin: true,
    }
  )
}
