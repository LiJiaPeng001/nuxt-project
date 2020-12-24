import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/index'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
