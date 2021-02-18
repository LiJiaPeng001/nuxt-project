<template>
  <div class="index-container page flex">
    <blog-list :list="list" :total="total"></blog-list>
    <right-panel :list="cateList"></right-panel>
  </div>
</template>

<script>
import blogList from './components/blog-list';
import rightPanel from './components/right-panel';

export default {
  components: {
    blogList,
    rightPanel,
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
    cateList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang='less' scoepd>
.index-container {
  align-items: flex-start;
}
@media screen and (max-width: @mobile-width) {
  .index-container {
    width: 100%;
    align-items: flex-start;
  }
}
</style>