<template>
  <div class="page setting-content">
    <div class="bg cover">
      <div class="h-user">
        <div class="h-info middle-flex">
          <div class="h-avatar" :key="user.avatar" v-preview="user.avatar"></div>
          <div class="username">{{ user.nickName || '请修改您的昵称喔' }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang='less' scoped>
.setting-content {
  padding: 15px 0 0 0;
  .bg {
    height: 200px;
    background-image: url('https://img1.halobear.com/temp/446dda2e2be9625e012efde7e6ff7cd8.jpg');
    position: relative;
  }
  .h-user {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    .h-info {
      margin-left: 20px;
      padding-bottom: 16px;
      .h-avatar {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        margin-right: 20px;
        border: 1px solid #fff;
      }
      .username {
        font-size: 18px;
        font-weight: bold;
        color: #fff;
      }
    }
  }
  .card {
    display: block;
    margin: 15px 0;
  }
}
</style>