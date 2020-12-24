import { createStore } from 'vuex'

export default createStore({
  state: {
    setting: {},
  },
  mutations: {
    SET_INDEX(state, payload) {
      state = { ...state, ...payload }
    },
  },
  actions: {},
  modules: {},
})
