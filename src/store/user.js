import authority from '@/utils/authority'
import * as Api from '@/api/user'
import { createStore } from 'vuex'

export default createStore({
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
    async login({ commit }, payload) {
      const data = await Api.login(payload)
      authority.set(data)
      commit('SET_USER', { user: data })
      location.reload()
    },
    logout({ commit }) {
      authority.clear()
      commit('SET_USER', { user: {} })
      location.reload()
    },
  },
})
