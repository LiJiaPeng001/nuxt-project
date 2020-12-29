<template>
  <div class="user container">
    <common-head></common-head>
    <head-banner :user="data"></head-banner>
    <nav-list :navList="navList" :nav="nav"></nav-list>
    <common-foot></common-foot>
  </div>
</template>

<script>
import * as Api from '@/api/user';
import authority from '@/utils/authority';
import commonHead from '@/common/commonHead';
import commonFoot from '@/common/commonFoot';
import headBanner from './components/HeadBanner';
import navList from './components/navList';

export default {
  components: {
    commonHead,
    commonFoot,
    headBanner,
    navList,
  },
  data() {
    let { id = '' } = this.$route.params;
    return {
      id,
      data: {},
    };
  },
  computed: {
    navList() {
      let list = [
        { icon: 'icon-dongtai', color: '#fb7299', title: '动态', key: 'news' },
        { icon: 'icon-guanzhu', color: '#ff5d47', title: '关注', key: 'like' },
      ];
      if (this.isOwner) {
        list.unshift({
          icon: 'icon-homepageselected',
          color: '#00c091',
          title: '主页',
          key: 'home',
        });
      }
      return list;
    },
    nav() {
      let { nav = '' } = this.$route.query;
      return nav ? nav : this.isOwner ? 'home' : 'news';
    },
    isOwner() {
      const userinfo = authority.get() || {};
      const { id = '' } = this.$route.params;
      if (id) {
        return id == userinfo.id;
      } else {
        return true;
      }
    },
  },
  mounted() {
    this.id && this.fetchData();
  },
  methods: {
    async fetchData() {
      let data = await Api.getUserInfo(this.id);
      this.data = data;
    },
  },
};
</script>

<style lang='less' scoped>
</style>