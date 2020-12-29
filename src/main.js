import { createApp } from 'vue'
import component from '@/common'
import { message, Avatar, Popover, Button, Icon, Form } from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazyImage from '@/utils/previewImage'
import './styles/index.less'

const Vue = createApp(App)

Vue.use(store)
Vue.use(router)
Vue.use(component)
Vue.directive('preview', lazyImage)

// antd

Vue.component('a-avatar', Avatar)
Vue.component('a-popover', Popover)
Vue.component('a-button', Button)
Vue.use(Form)
Vue.use(Icon)

Vue.config.globalProperties.$message = message

Vue.mount('#app')
