import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const Vue = createApp(App).use(router)

Vue.mount('#app')
