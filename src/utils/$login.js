import { createApp } from 'vue'
import loginView from '@/common/CheckIn'

let loginModal = createApp(loginView)
let instance

export default () => {
  return new Promise((resolve, reject) => {
    if (!instance) {
      let view = document.createElement('div')
      view.class = 'login-container'
      instance = loginModal.mount(view)

      document.body.appendChild(instance.$el)
    }
    instance.resolve = resolve
    instance.reject = reject
    instance.visible = true
  })
}
