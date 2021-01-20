import authority from "@/utils/authority";
import * as Api from "@/api/user";

export const state = () => ({
  user: authority.get()
});

export const mutations = {
  SET_USER(state, payload) {
    Object.entries(payload).forEach(([key, value]) => {
      state[key] = value;
    });
  }
};

export const actions = {
  async login({ commit }, payload) {
    const data = await Api.login(payload);
    authority.set(data);
    commit("SET_USER", { user: data });
    location.reload();
  },
  logout({ commit }) {
    authority.clear();
    commit("SET_USER", { user: {} });
    location.reload();
  }
};
