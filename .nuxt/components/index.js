export { default as Detail } from '../../components/detail/index.vue'
export { default as Index } from '../../components/index/index.vue'

export const LazyDetail = import('../../components/detail/index.vue' /* webpackChunkName: "components/detail/index'}" */).then(c => c.default || c)
export const LazyIndex = import('../../components/index/index.vue' /* webpackChunkName: "components/index/index'}" */).then(c => c.default || c)
