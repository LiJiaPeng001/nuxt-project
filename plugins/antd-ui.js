import Vue from "vue";
import {
  Button,
  message,
  BackTop,
  Result,
  Input,
  Spin,
  ConfigProvider
} from "ant-design-vue";

Vue.use(Input);
Vue.use(Button);
Vue.use(Result);
Vue.prototype.$message = message;
Vue.use(Spin);
Vue.use(BackTop);
Vue.use(ConfigProvider);
