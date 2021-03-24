<template>
  <div class="index-container page flex">
    <div class="l-list">
      <blog-list :list="list" :total="total"></blog-list>
      <my-pagination
        style="margin-bottom: 40px"
        :payload.sync="payload"
        :total="total"
      ></my-pagination>
    </div>
    <right-panel :list="cateList"></right-panel>
  </div>
</template>

<script>
import MyPagination from "@/common/my-pagination";
import blogList from "./components/blog-list";
import rightPanel from "./components/right-panel";

export default {
  components: {
    blogList,
    rightPanel,
    MyPagination,
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
  data() {
    const { page = 1, per_page = 12 } = this.$route.query;
    return {
      payload: {
        page: Number(page),
        per_page: Number(per_page),
      },
    };
  },
  watch: {
    "$route.query"() {
      const { page = 1, per_page = 3 } = this.$route.query;
      this.payload.page = Number(page);
      this.payload.per_page = Number(per_page);
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
    .l-list {
      margin: 0 auto;
    }
  }
}
</style>
