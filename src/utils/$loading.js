import { createApp } from 'vue'
import loadingView from '@/common/Loading'

let loadingModal = createApp(loadingView)
let instance

export default {
  show() {
    if (!instance) {
      let view = document.createElement('div')
      view.class = 'loading-container'
      instance = loadingModal.mount(view)
      document.body.appendChild(instance.$el)
    }
    instance.visible = true
  },
  hide() {
    instance.visible = false
  },
}
