import cook from "@/utils/cookie";

export const state = () => ({
  setting: {}
});

export const mutation = {
  SET_INDEX(state, payload) {
    state = { ...state, ...payload };
  }
};

export const actions = {
  nuxtServerInit({ commit }, { req }) {
    let cookie = req.headers.cookie;
    cookie = cook.get(cookie);
    if (cookie) {
      commit("user/SET_USER", { user: JSON.parse(cookie) });
    }
  }
};
