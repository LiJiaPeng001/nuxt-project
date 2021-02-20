<template>
  <div class="common-head">
    <div class="head-wrapper middle-flex">
      <!-- logo -->
      <img class="logo" :src="imgUrl" alt="李小朋" />
      <!-- author -->
      <div class="author">李家朋的个人博客</div>
      <!-- tabs -->
      <div class="tabs middle-flex">
        <router-link
          class="tab"
          v-for="it in tabs"
          :key="it.key"
          :class="{ 'active-tab': $route.name === it.key || ($route.name || '').includes(it.key) }"
          :to="{ name: it.key }"
        >
          {{ it.name }}
        </router-link>
        <a title="github" class="tab" target="_blank" href="https://github.com/LiJiaPeng001">
          <i class="iconfont icon icon-git"></i>
        </a>
      </div>
      <!-- 搜索 -->
      <a-input-search
        v-show="$route.name === 'index'"
        :maxLength="20"
        placeholder="请输入博客标题"
        class="searchInput"
        v-model="payload.title"
        @search="onSearch"
      />
    </div>
  </div>
</template>

<script>
import { imgUrl } from '@/contants';

export default {
  data() {
    let { title = '' } = this.$route.query;
    return {
      imgUrl,
      tabs: [{ name: '七牛上传', key: 'upload' }],
      payload: {
        title,
      },
    };
  },
  methods: {
    onSearch(title) {
      if (title === this.$route.query.title) return;
      this.saveParams({ title, page: 1 });
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
      margin-right: 20px;
    }
    .author {
      font-weight: bold;
      font-size: 18px;
      margin-right: 100px;
      flex: 1;
    }
    .tabs {
      font-size: 16px;
      font-weight: 500;
      .tab {
        margin-right: 30px;
        color: #68676c;
        .icon {
          color: #68676c;
          font-size: 20px;
        }
      }
      .active-tab {
        color: #00a1d6;
        font-weight: bold;
      }
    }
  }
  .searchInput {
    width: 200px;
  }
}
@media screen and (max-width: @mobile-width) {
  .common-head {
    background-color: #fff;
    .head-wrapper {
      height: 1rem;
      width: 100%;
      margin: 0 auto;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      .logo {
        width: 0.5rem;
        height: 0.5rem;
        flex-shrink: 0;
        margin-right: 20px;
      }
      .author {
        font-weight: bold;
        font-size: 0.32rem;
        margin-right: 0;
        flex: 0 0 auto;
      }
      .tabs {
        display: none;
      }
    }
    .searchInput {
      display: none;
      width: 200px;
    }
  }
}
</style>