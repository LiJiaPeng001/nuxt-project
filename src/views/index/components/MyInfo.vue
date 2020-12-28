<template>
  <div class="my-info">
    <div class="user-pic" v-preview="bg"></div>
    <div class="user-info middle-flex">
      <div class="avatar" v-preview="user.avatar" :key="user.avatar"></div>
      <div class="name">{{ user.nickName || '未知用户' }}</div>
    </div>
    <div class="menus center-flex">
      <div
        @click="toQuery(it.name)"
        class="menu-item center-flex"
        v-for="it in menus"
        :key="it.text"
      >
        <div class="num">56</div>
        <div class="text">{{ it.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bg: 'https://img1.halobear.com/temp/446dda2e2be9625e012efde7e6ff7cd8.jpg',
      menus: [
        { text: '关注', name: { path: '/user', query: {} } },
        { text: '粉丝', name: { path: '/user', query: {} } },
        { text: '动态', name: { path: '/user', query: { nav: 'news' } } },
      ],
    };
  },
  computed: {
    user() {
      return this.$store.state.user.user;
    },
  },
  methods: {
    toQuery(router) {
      this.$router.push(router);
    },
  },
};
</script>

<style lang='less' scoped>
.my-info {
  position: relative;
  width: 246px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #fff;
  .user-pic {
    height: 64px;
  }
  .user-info {
    position: absolute;
    left: 16px;
    top: 48px;
    .avatar {
      width: 56px;
      height: 56px;
      margin-right: 5px;
      border-radius: 50%;
      border: 1px solid #fff;
    }
  }
  .menus {
    margin: 60px 0 20px 0;
    .menu-item {
      width: 64px;
      flex-direction: column;
      .num {
        letter-spacing: 0;
        font-weight: bold;
        line-height: 19px;
        color: #222;
      }
      .text {
        font-size: 12px;
        color: #99a2aa;
        padding-top: 9px;
      }
    }
  }
}
</style>