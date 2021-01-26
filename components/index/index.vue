<template>
  <div class="index-container page">
    <blog-list :list="list"></blog-list>
  </div>
</template>

<script>
import blogList from './components/blog-list';

export default {
  components: {
    blogList,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    total: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang='less' scoepd>
</style>