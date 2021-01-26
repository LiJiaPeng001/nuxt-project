import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _baf01ba0 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _1dc782eb = () => interopDefault(import('../pages/blog/_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _7167e1b8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/test",
    component: _baf01ba0,
    name: "test"
  }, {
    path: "/blog/:id?",
    component: _1dc782eb,
    name: "blog-id"
  }, {
    path: "/",
    component: _7167e1b8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
