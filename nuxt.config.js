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
    title: '李小朋 (ง ˙o˙)ว',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2073318_b62s9iewnfv.css',
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
    '/api': baseURL,
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
