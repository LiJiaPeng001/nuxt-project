import NProgress from "nprogress";
import "nprogress/nprogress.css"; // 进度条样式

NProgress.configure({ showSpinner: false }); // 隐藏旋转图标

export default ({ app: { router } }) => {
  router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
  });
  router.afterEach(() => {
    NProgress.done();
  });
};
