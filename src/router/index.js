import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    meta: {
      title: '',
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/index'),
  },
  {
    path: '/yang',
    name: 'Yang',
    meta: {
      title: '李阳洋',
    },
    component: () => import(/* webpackChunkName: "about" */ '@/views/yang/index.vue'),
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

router.afterEach((to) => {
  document.title = to.meta.title || '李小朋 (ง ˙o˙)ว'
})

export default router
