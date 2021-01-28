<template>
  <div class="right-panel">
    <!-- 分类 -->
    <div class="r-item">
      <div class="title">分类标签</div>
      <div class="list middle-flex">
        <div class="item" v-for="it in list" :key="it.id">{{ it.name }}</div>
      </div>
    </div>
    <!-- 友情链接 -->
    <div class="r-item">
      <div class="title">友情链接</div>
      <div class="list middle-flex">
        <div class="item">我永远喜欢IU</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
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
    .list {
      flex-wrap: wrap;
      .item {
        margin: 0 10px 10px 0;
        color: rgba(0, 0, 0, 0.65);
        cursor: pointer;
        transition: 0.2s linear;
        &:hover {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
}
</style>