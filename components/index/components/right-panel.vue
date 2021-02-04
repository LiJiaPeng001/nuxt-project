<template>
  <div class="right-panel">
    <!-- 分类 -->
    <div class="r-item">
      <div class="title">分类标签</div>
      <div class="list middle-flex">
        <div
          class="item text"
          v-for="it in list"
          :key="it.id"
          @click="saveParams({ cate_id: it.id })"
          :class="{ activeItem: cate_id == it.id }"
        >
          {{ it.name }}
        </div>
      </div>
    </div>
    <!-- 友情链接 -->
    <div class="r-item">
      <div class="title">公告栏</div>
      <img :src="imgUrl" class="img" alt="" />
    </div>
  </div>
</template>

<script>
import { imgUrl } from '@/contants';

export default {
  data() {
    let { cate_id } = this.$route.query;
    return {
      cate_id,
      imgUrl,
    };
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    '$route.query'() {
      this.cate_id = this.$route.query.cate_id;
    },
  },
};
</script>

<style lang='less' scoped>
.right-panel {
  width: 300px;
  flex-shrink: 0;
  margin: 25px 0 25px 20px;
  .r-item {
    padding: 16px;
    border-radius: 4px;
    background-color: #fff;
    margin-bottom: 20px;
    .title {
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    .img {
      display: block;
      width: 100%;
    }
    .list {
      flex-wrap: wrap;
      .item {
        margin: 0 10px 10px 0;
        color: rgba(0, 0, 0, 0.65);
        cursor: pointer;
        transition: 0.2s linear;
      }
      .activeItem {
        color: @primary-color;
      }
    }
  }
}
</style>