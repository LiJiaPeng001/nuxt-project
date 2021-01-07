import authority from '@/utils/authority'
import * as Api from '@/api/user'

export default {
  namespaced: true,
  state: {
    user: authority.get(),
  },
  mutations: {
    SET_USER(state, payload) {
      Object.entries(payload).forEach(([key, value]) => {
        state[key] = value
      })
    },
  },
  actions: {
    async login(options, payload) {
      const data = await Api.login(payload)
      authority.set(data)
      location.reload()
    },
    logout() {
      authority.clear()
      location.reload()
    },
  },
}
