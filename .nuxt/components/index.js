export { default as Index } from '../../components/index/index.vue'
export { default as BlogDetail } from '../../components/blog-detail/index.vue'
export { default as BlogList } from '../../components/index/components/blog-list.vue'
export { default as RightPanel } from '../../components/index/components/right-panel.vue'

export const LazyIndex = import('../../components/index/index.vue' /* webpackChunkName: "components/index/index'}" */).then(c => c.default || c)
export const LazyBlogDetail = import('../../components/blog-detail/index.vue' /* webpackChunkName: "components/blog-detail/index'}" */).then(c => c.default || c)
export const LazyBlogList = import('../../components/index/components/blog-list.vue' /* webpackChunkName: "components/index/components/blog-list'}" */).then(c => c.default || c)
export const LazyRightPanel = import('../../components/index/components/right-panel.vue' /* webpackChunkName: "components/index/components/right-panel'}" */).then(c => c.default || c)
