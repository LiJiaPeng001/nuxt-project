import Vue from 'vue'

export default () => {
  Vue.mixin({
    methods: {
      submitImage(images = []) {
        return !images.length ? '' : images[0].url
      },
      saveParams(payload = {}) {
        let { query } = this.$route
        this.$router.replace({
          query: { ...query, ...payload },
        })
      },
    },
  })
}
