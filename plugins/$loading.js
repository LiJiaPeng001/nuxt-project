import Vue from "vue";

import Loading from "@/common/Loading";

const LoginModal = Vue.extend(Loading);

let views;

export default {
  show() {
    if (process.server) return; // 服务端渲染
    if (!views) {
      views = new LoginModal();
      const vm = views.$mount();
      document.body.appendChild(vm.$el);
    }
    views.visible = true;
  },
  hide() {
    views.visible = false;
  }
};
