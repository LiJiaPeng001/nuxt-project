<template>
  <div class="like-view flex">
    <!-- left-slide -->
    <div class="nav-slide">
      <div
        class="nav-item middle-flex"
        v-for="it in navList"
        :key="it.key"
        :class="{'active-nav':nav === it.key}"
        @click="onChangeNav(it.key)"
      >
        <i :class="['iconfont',it.icon]"></i>
        <div class="text">{{it.name}}</div>
      </div>
    </div>
    <!-- right-info -->
    <div class="right-list">
      <blank-page></blank-page>
    </div>
  </div>
</template>

<script>
import * as Api from '@/api/user';

export default {
  data() {
    return {
      nav: 'like',
      navList: [
        { name: '我的关注', icon: 'icon-fensi', color: '', key: 'like' },
        { name: '我的粉丝', icon: 'icon-guanzhu1', color: '', key: 'fensi' }
      ],
      payload: {
        page: 1,
        per_page: 12
      },
      list: []
    };
  },
  computed: {
    user() {
      return this.$store.state.user.user;
    },
    user_id() {
      let { id = '' } = this.$route.params;
      return id || this.user.id;
    }
  },
  mounted() {
    this.fetchFans();
  },
  methods: {
    async fetchFans() {
      this.payload.user_id = this.user_id;
      let { list } = await Api.fans(this.payload);
      this.list = list;
    },
    onChangeNav(key) {
      this.nav = key;
    }
  }
};
</script>

<style lang='less' scoped>
.like-view {
  position: relative;
  margin-top: 15px;
  align-items: flex-start;
  .nav-slide {
    width: 210px;
    background-color: #ffffff;
    margin-right: 10px;
    padding: 20px 0;
    .nav-item {
      position: relative;
      padding-left: 20px;
      line-height: 44px;
      transition: background-color 0.3s ease;
      white-space: nowrap;
      overflow: hidden;
      cursor: pointer;
      &:hover {
        background-color: #eeeeee;
        .text {
          color: #00a1d6;
        }
      }
      .iconfont {
        font-size: 18px;
        color: #ccc;
      }
      .text {
        margin-left: 8px;
      }
    }
  }
  .active-nav {
    background-color: #00a1d6 !important;
    .text {
      color: #fff !important;
    }
  }
  .right-list {
    flex: 1;
    background-color: #ffffff;
  }
}
</style>