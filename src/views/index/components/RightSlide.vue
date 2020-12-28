<template>
  <div class="right-slide">
    <div class="notice-panel">
      <div class="title">公告栏</div>
      <div class="image" v-preview="img1"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img1: 'https://i0.hdslb.com/bfs/album/6160f9ad45afa002cc05fa063145ebb5b28cb93c.jpg'
    };
  }
};
</script>

<style lang='less' scoped>
.right-slide {
  width: 270px;
  border-radius: 4px;
  .notice-panel {
    position: relative;
    width: 268px;
    background-color: #fff;
    border-radius: 4px;
    margin-bottom: 8px;
    padding: 12px 16px;
    .title {
      padding-bottom: 8px;
    }
    .image {
      height: 100px;
      margin: 0 auto;
      display: block;
      border-radius: 4px;
      background: #fff center/cover no-repeat;
    }
  }
}
</style>