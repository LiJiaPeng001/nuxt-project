import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import router from './router'
import store from './store'
import component from '@/common'
import './styles/index.less'

const Vue = createApp(App)

Vue.use(store)
Vue.use(router)
Vue.use(Antd)
Vue.use(component)

Vue.mount('#app')
