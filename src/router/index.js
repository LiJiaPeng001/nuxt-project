import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '首页',
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/index'),
  },
  {
    path: '/user:id',
    name: 'User',
    meta: {
      title: '用户',
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/user'),
  },
  {
    path: '/test',
    name: 'test',
    meta: {
      title: '测试',
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/test/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
