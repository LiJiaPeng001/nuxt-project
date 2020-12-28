import { createStore } from 'vuex'
import user from './user'

export default createStore({
  state: {
    setting: {},
  },
  mutations: {
    SET_INDEX(state, payload) {
      state = { ...state, ...payload }
    },
  },
  modules: {
    user,
  },
})
