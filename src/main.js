import { createApp } from 'vue'
import component from '@/common'
import { message, Avatar, Popover } from 'ant-design-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'

const Vue = createApp(App)

Vue.use(store)
Vue.use(router)
Vue.use(component)

// antd

Vue.component('a-avatar', Avatar)
Vue.component('a-popover', Popover)

Vue.config.globalProperties.$message = message

Vue.mount('#app')
