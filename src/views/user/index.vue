<template>
  <div class="user-container">
    <common-head></common-head>
    <head-banner :user="data"></head-banner>
    <nav-list :navList="navList" v-model:nav="nav"></nav-list>
    <news-list v-show="nav === 'news'"></news-list>
    <like-view v-show="nav === 'like'"></like-view>
    <common-foot></common-foot>
  </div>
</template>

<script>
import * as Api from '@/api/user';
import commonHead from '@/common/commonHead';
import commonFoot from '@/common/commonFoot';
import headBanner from './components/HeadBanner';
import navList from './components/navList';
import newsList from './components/NewsList';
import likeView from './components/likeView';

export default {
  components: {
    commonHead,
    commonFoot,
    headBanner,
    navList,
    newsList,
    likeView,
  },
  data() {
    let { id = '' } = this.$route.params;
    return {
      id,
      data: {},
      navList: [
        { icon: 'icon-dongtai', color: '#fb7299', title: '动态', key: 'news' },
        { icon: 'icon-guanzhu', color: '#ff5d47', title: '关注', key: 'like' },
      ],
      nav: 'news',
    };
  },
  mounted() {
    if (this.id) {
      this.fetchData();
    }
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
.user-container {
  background-image: url('https://img1.halobear.com/wedding/FhaI1cDUUrcmDOqgT5IzjhcGD8Hh.png');
  background-attachment: fixed;
  min-height: 100vh;
  background-position: center;
  background-size: cover;
}
</style>