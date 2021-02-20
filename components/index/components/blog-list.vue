<template>
  <div class="blog-list">
    <router-link
      :to="{ name: 'blog-id', params: { id: it.id } }"
      class="blog-item"
      v-for="it in list"
      :key="it.key"
      :title="it.title"
    >
      <div class="title">{{ it.title }}</div>
      <div class="content">{{ it.content }}</div>
      <div class="bottom">
        <div class="cate">来自分类：{{ it.cate.name }}</div>
        <div class="created_at">
          <i class="iconfont icon-time"></i>
          <span class="text">{{ it.updatedAt }}</span>
        </div>
      </div>
    </router-link>
    <blank-page v-if="total === list.length"></blank-page>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    total: {
      type: Number,
      defualt: 0,
    },
  },
};
</script>

<style lang='less' scoped>
.ellipsis(@line:2) {
  display: -webkit-box;
  -webkit-line-clamp: @line;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.blog-list {
  width: 870px;
  padding: 25px 0;
  .blog-item {
    box-sizing: border-box;
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: 0.2s linear;
    &:hover {
      box-shadow: 0 0 8px 2px #dfdfdf;
      .title {
        color: @primary-color;
      }
    }
    .title {
      font-size: 20px;
      font-weight: 500;
      color: #222222;
      line-height: 28px;
      margin-bottom: 10px;
      transition: 0.2s linear;
    }
    .content {
      font-size: 14px;
      font-weight: 400;
      color: #666666;
      line-height: 24px;
      flex: 1;
      white-space: pre-wrap;
      word-wrap: break-word;
      word-break: break-all;
      margin-bottom: 10px;
      .ellipsis(3);
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      font-weight: 400;
      color: #999999;
      line-height: 20px;
    }
  }
}
@media screen and (max-width: @mobile-width) {
  .blog-list {
    width: 7rem;
    margin: 0.2rem auto;
    padding: 0;
    .blog-item {
      width: 100%;
      box-sizing: border-box;
      padding: 0.24rem;
      background-color: #fff;
      border-radius: 0.04rem;
      margin-bottom: 0.2rem;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      transition: 0.2s linear;
      &:hover {
        box-shadow: 0 0 8px 2px #dfdfdf;
        .title {
          color: @primary-color;
        }
      }
      .title {
        font-size: 0.26rem;
        font-weight: 500;
        color: #222222;
        line-height: 0.32rem;
        margin-bottom: 0.14rem;
        transition: 0.2s linear;
      }
      .content {
        font-size: 0.24rem;
        font-weight: 400;
        color: #666666;
        line-height: 0.3rem;
        flex: 1;
        white-space: pre-wrap;
        word-wrap: break-word;
        word-break: break-all;
        margin-bottom: 0.2rem;
        .ellipsis(3);
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        font-size: 0.24rem;
        font-weight: 400;
        color: #999999;
        line-height: 0.3rem;
      }
    }
  }
}
</style>