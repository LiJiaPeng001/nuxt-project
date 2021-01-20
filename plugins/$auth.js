import Vue from 'vue'
const key = "my-blog";
const maxAge = 1000 * 60 * 60 * 60 * 30;

let authority = {
  get() {
    let data = JSON.parse(window.localStorage.getItem(key)) || {};
    if (new Date().getTime() - (data.setTime || 0) >= maxAge) {
      this.clear();
      return {};
    }
    return data;
  },
  set(data) {
    window.localStorage.setItem(
      key,
      JSON.stringify({ ...this.get(), ...data, setTime: new Date().getTime() })
    );
  },
  clear() {
    window.localStorage.removeItem(key);
  }
};

Vue.prototype.$auth = authority
