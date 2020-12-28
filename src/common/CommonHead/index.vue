<template>
  <div class="common-head">
    <div class="head-wrapper middle-flex">
      <!-- logo -->
      <img class="logo" :src="imgUrl" alt="李小朋" />
      <!-- tabs -->
      <div class="tabs middle-flex">
        <div
          class="tab"
          v-for="it in tabs"
          :key="it.key"
          :class="{
            'active-tab': $route.path === it.query || ($route.path || '').includes(it.key),
          }"
          @click="$router.push(it.query)"
        >
          {{ it.name }}
        </div>
      </div>
      <!-- 用户信息 -->
      <a-popover>
        <template v-slot:content v-if="user.id">
          <p @click="logout" class="text">退出登录</p>
        </template>
        <template v-slot:content v-else>
          <p @click="login" class="text">点击登录</p>
        </template>
        <div class="user-info middle-flex">
          <a-avatar :src="user.avatar || imgUrl" :size="36" icon="user" />
        </div>
      </a-popover>
    </div>
  </div>
</template>

<script>
import { imgUrl } from '@/utils/contants';
import $login from '@/utils/$login';

export default {
  data() {
    return {
      imgUrl,
      tabs: [
        { name: '首页', query: '/' },
        { name: '我的空间', query: '/user' },
      ],
    };
  },
  computed: {
    user() {
      return this.$store.state.user.user;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout');
    },
    login() {
      $login();
    },
  },
};
</script>

<style lang='less' scoped>
.common-head {
  background-color: #fff;
  .head-wrapper {
    height: 68px;
    width: 1190px;
    margin: 0 auto;
    box-sizing: border-box;
    .logo {
      width: 40px;
      height: 40px;
      flex-shrink: 0;
      margin-right: 100px;
    }
    .tabs {
      flex: 1;
      font-size: 16px;
      font-weight: 500;
      .tab {
        margin-right: 30px;
        color: #212121;
      }
      .active-tab {
        color: #00a1d6;
        font-weight: bold;
      }
    }
  }
  .user-info {
    flex-shrink: 0;
    .name {
      max-width: 120px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-left: 10px;
      font-size: 16px;
      font-weight: 500;
    }
  }
}
</style>