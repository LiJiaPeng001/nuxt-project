const components = {}

// 自动引入当前文件夹全部组件
const r = require.context('./', true, /index\.vue/)
r.keys().forEach((key) => {
  const name = key
    .replace(/^\.\//, '')
    .replace(/\/index.vue$/, '')
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
  components[name] = r(key).default
})

export default {
  install(Vue) {
    Object.entries(components).forEach(([name, component]) => {
      Vue.component(name, component)
    })
  },
}
