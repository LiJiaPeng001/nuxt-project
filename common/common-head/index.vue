<template>
  <div class="common-head">
    <div class="head-wrapper middle-flex">
      <!-- logo -->
      <img class="logo" :src="imgUrl" alt="李小朋" />
      <!-- tabs -->
      <div class="tabs middle-flex">
        <router-link
          class="tab"
          v-for="it in tabs"
          :key="it.key"
          :class="{ 'active-tab': $route.name === it.key || ($route.name || '').includes(it.key) }"
          :to="{ name: it.key }"
          >{{ it.name }}</router-link
        >
      </div>
      <!-- 用户信息 -->
      <div class="user-info middle-flex">
        <img :src="imgUrl" class="avatar" />
      </div>
    </div>
  </div>
</template>

<script>
import { imgUrl } from '@/utils/contants';

export default {
  data() {
    return {
      imgUrl,
      tabs: [{ name: '首页', key: 'index' }],
    };
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
    .avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
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