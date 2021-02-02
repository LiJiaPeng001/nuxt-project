import { baseURL } from './contants'
const key = process.env.NODE_ENV

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  env: {
    NODE_ENV: key,
    baseURL,
  },
  server: {
    host: '0.0.0.0',
    port: '3000',
  },
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: '李家朋的个人博客',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'keyword',
        name: 'keyword',
        content: '个人博客，vue，vue-cli，学习分享，前端，node，koa2',
      },
      {
        hid: 'description',
        name: 'description',
        content: '李小朋的个人博客网站',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2073318_8uiuxyyvj0d.css',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['@/style/index.less'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/antd-ui' },
    { src: '~/plugins/mixin' }, // mixin
    { src: '~/plugins/photoSwiper', mode: 'client' }, // 预览图片插件
    { src: '~plugins/previewImage.js', mode: 'client' }, // 预加载
    { src: '~/plugins/$auth', mode: 'client' }, // localstroge
    { src: '~/plugins/component', mode: 'client' }, // 公共组件
    { src: '~/plugins/process', mode: 'client' }, // 进度条
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/proxy'],
  proxy: {
    '/api': {
      target: baseURL,
      changOrigin: true, //开启代理
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'ant-design-vue',
            libraryDirectory: 'es',
            style: true,
          },
        ],
      ],
    },
    transpile: ['ant-design-vue'],
    loaders: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#00a1d6',
            'error-color': '#f66495',
            'text-color': '#212121',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
}
