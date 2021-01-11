import { createStore } from 'vuex'
import createLogger from '@/utils/createLogger'
const debug = process.env.NODE_ENV !== 'production'

let files = require.context('./modules', false, /\.js$/)
let modules = {}
files.keys().forEach((key) => {
  modules[key.replace(/\.\/|\.js/g, '')] = files(key).default
})

Object.keys(modules).forEach((key) => {
  modules[key]['namespaced'] = true
})

export default createStore({
  plugins: debug ? [createLogger()] : [],
  modules,
})
