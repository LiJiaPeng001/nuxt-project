<template>
  <div class="blog-detail page">
    <div class="title">{{ data.title }}</div>
    <div class="blog-info">
      <div class="info-item">来自分类：{{ data.cate.name }}</div>
      <div class="info-item">
        <i class="iconfont icon-time"></i>
        <div class="text">{{ data.updatedAt }}</div>
      </div>
    </div>
    <div class="content" v-html="data.md"></div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang='less' scoped>
.blog-detail {
  padding: 40px 24px;
  border-radius: 6px;
  margin: 15px auto;
  background-color: #fff;
  .title {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    color: #222222;
    line-height: 40px;
    margin-bottom: 10px;
  }
  .blog-info {
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    .info-item {
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: 400;
      color: #666666;
      line-height: 20px;
      margin-right: 22px;
      .iconfont {
        font-size: 14px;
        margin-right: 4px;
      }
    }
  }
  .content {
    white-space: pre-wrap;
    word-break: break-all;
    word-wrap: break-word;
    font-size: 16px;
    font-weight: 400;
    color: #222222;
    line-height: 28px;
  }
}
@media screen and (max-width: @mobile-width) {
  .blog-detail {
    width: 100%;
    padding: 0.4rem 0.24rem;
    border-radius: 0.06rem;
    margin: 0.15rem auto;
    background-color: #fff;
    .title {
      text-align: center;
      font-size: 0.28rem;
      font-weight: bold;
      color: #222222;
      line-height: 0.4rem;
      margin-bottom: 0.1rem;
    }
    .blog-info {
      margin-bottom: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      .info-item {
        display: flex;
        align-items: center;
        font-size: 0.2rem;
        font-weight: 400;
        color: #666666;
        line-height: 0.24rem;
        margin-right: 0.22rem;
        .iconfont {
          font-size: 0.2rem;
          margin-right: 0.04rem;
        }
      }
    }
    .content {
      white-space: pre-wrap;
      word-break: break-all;
      word-wrap: break-word;
      font-size: 0.26rem;
      font-weight: 400;
      color: #222222;
      line-height: 0.28rem;
    }
  }
}
</style>