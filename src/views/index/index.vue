<template>
  <div class="home-page cover">
    <ul>
      <li v-for="it in 10" :key="it"></li>
    </ul>
    <common-head></common-head>
    <common-foot></common-foot>
  </div>
</template>

<script>
import * as Api from '@/api/blog';
import commonHead from '@/common/CommonHead';
import commonFoot from '@/common/CommonFoot';

export default {
  components: {
    commonHead,
    commonFoot,
  },
  data() {
    return {
      list: [],
      total: 0,
      payload: {
        page: 1,
        per_page: 20,
      },
      record: {
        content: '',
        images: [],
      },
    };
  },
  mounted() {
    this.fetchList();
  },
  methods: {
    async fetchList() {
      let { list, total } = await Api.list(this.payload);
      this.list = list;
      this.total = total;
    },
    async createThing(payload) {
      let p = { ...payload };
      p.images = JSON.stringify(p.images);
      if (p.content === '' && !p.images.length) return;
      await Api.add(p);
      this.$message.success('发布成功₍ᐢ⸝⸝› ̫ ‹⸝⸝ᐢ₎');
      this.record.content = '';
      this.record.images = [];
      this.payload.page = 1;
      this.fetchList();
    },
  },
};
</script>

<style lang='less' scoped>
.home-page {
  padding: 0 0 30px;
  background-image: url('./images/bg.png');
  background-attachment: fixed;
  min-height: 100vh;
  .page-content {
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    z-index: 2;
  }
  ul {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0px;
    padding: 0px;
    z-index: 1;
    box-sizing: border-box;
    margin-top: 68px;
    @keyframes animate {
      0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
      }
      100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
      }
    }
    li {
      width: 20px;
      height: 20px;
      display: block;
      list-style: none;
      background: #fff;
      border-radius: 5px;
      animation: animate 25s linear infinite;
      bottom: -200px;
      position: absolute;
      &:nth-child(1) {
        left: 15%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
      }
      &:nth-child(2) {
        left: 5%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
      }
      &:nth-child(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
      }
      &:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
      }
      &:nth-child(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
      }
      &:nth-child(6) {
        left: 75%;
        width: 150px;
        height: 150px;
        animation-delay: 3s;
      }
      &:nth-child(7) {
        left: 35%;
        width: 200px;
        height: 200px;
        animation-delay: 7s;
      }
      &:nth-child(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
      }
      &:nth-child(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
      }
      &:nth-child(10) {
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
      }
    }
  }
}
</style>