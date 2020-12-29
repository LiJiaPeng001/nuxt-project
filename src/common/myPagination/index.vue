<template>
  <div class="my-pagination center-flex" v-if="totalPage > 1">
    <!-- 上一页 -->
    <router-link
      class="prev-view"
      :class="{ disabled: payload.page == 1 }"
      :to="{ query: { ...$route.query, page: prevPage } }"
    >
      <div @click="onChangeSize(prevPage, $event)">上一页</div>
    </router-link>
    <!-- 第一栏 -->
    <div class="one-list middle-flex">
      <router-link v-for="it in oneList" :key="it" :to="{ query: { ...$route.query, page: it } }">
        <div
          class="page-view"
          :class="{ 'active-view': payload.page == it }"
          @click="onChangeSize(it, $event)"
        >
          {{ it }}
        </div>
      </router-link>
    </div>
    <!-- 第二栏 -->
    <div class="two-list middle-flex" v-if="twoList && twoList.length">
      <div class="ellipsis">...</div>
      <router-link v-for="it in twoList" :to="{ query: { ...$route.query, page: it } }" :key="it">
        <div
          class="page-view"
          :class="{ 'active-view': payload.page == it }"
          @click="onChangeSize(it, $event)"
        >
          {{ it }}
        </div>
      </router-link>
    </div>
    <!-- 第三栏 -->
    <div class="three-list middle-flex" v-if="threeList && threeList.length">
      <div class="ellipsis">...</div>
      <router-link :to="{ query: { ...$route.query, page: it } }" v-for="it in threeList" :key="it">
        <div
          class="page-view"
          :class="{ 'active-view': payload.page == it }"
          @click="onChangeSize(it, $event)"
        >
          {{ it }}
        </div>
      </router-link>
    </div>
    <!-- 下一页 -->
    <router-link
      class="next-view"
      :class="{ disabled: totalPage == payload.page }"
      :to="{ query: { ...$route.query, page: nextPage } }"
    >
      <div @click="onChangeSize(nextPage, $event)">下一页</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'myPagination',
  props: {
    total: {
      type: Number,
      default: 0,
    },
    payload: {
      type: Object,
      default: () => ({
        page: 1,
        per_page: 20,
      }),
    },
    prevent: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    nextPage() {
      let num = this.payload.page == this.totalPage ? this.totalPage : this.payload.page + 1;
      return num;
    },
    prevPage() {
      return this.payload.page == 1 ? 1 : this.payload.page - 1;
    },
    totalPage() {
      return Math.ceil(this.total / this.payload.per_page);
    },
    oneList() {
      if (this.totalPage < 10) return this.totalPage;
      if (this.totalPage >= 10) {
        if (this.payload.page >= 4) return 1;
        else return 5;
      }
      return 0;
    },
    twoList() {
      let { page } = this.payload;
      if (this.totalPage < 10) return [];
      if (this.totalPage >= 10 && page >= 4 && page < this.totalPage - 2) {
        return [page - 2, page - 1, page, page + 1, page + 2];
      }
      return [];
    },
    threeList() {
      const { page } = this.payload;
      const { totalPage } = this;
      if (totalPage < 10) return 0;
      if (totalPage >= 10) {
        if (page >= totalPage - 2)
          return [totalPage - 4, totalPage - 3, totalPage - 2, totalPage - 1, totalPage];
        return [totalPage];
      }
      return [];
    },
  },
  methods: {
    changeView(init) {
      let payload = {
        page: 1,
      };
      if (init) {
        if (this.payload.page == 1) return;
        payload.page = this.payload.page - 1;
      } else {
        if (this.payload.page == this.totalPage || !this.total) return;
        payload.page = this.payload.page + 1;
      }
      this.onChange(payload);
    },
    onChangeSize(i, e) {
      if (!this.prevent) return;
      e.preventDefault();
      this.onChange({ page: i });
    },
    onChange(payload) {
      payload = { ...this.payload, ...payload };
      this.$emit('update:payload', payload);
      this.$emit('change', payload);
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang='less' scoped>
.my-pagination {
  color: #222222;
  font-size: 14px;
  .prev-view,
  .next-view,
  .page-view {
    color: #222222;
    padding: 8px 14px;
    line-height: 20px;
    border-radius: 3px;
    text-align: center;
    margin-right: 10px;
    cursor: pointer;
    -webkit-user-select: none;
    background-color: #fff;
  }
  .ellipsis {
    font-size: 14px;
    font-weight: 400;
    color: #222222;
    line-height: 20px;
    margin-right: 10px;
  }
  .disabled {
    background-color: #f8f8fa;
    color: #cccccc;
    pointer-events: none;
  }
  .active-view {
    background-color: #0185f2;
    color: #fff;
    font-weight: bold;
  }
}
</style>