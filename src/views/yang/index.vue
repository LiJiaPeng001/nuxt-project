<template>
  <div class="app center-flex">
    <div class="click-list flex">
      <div class="item">李</div>
      <div class="item">某</div>
      <div class="item">某</div>
      <div
        :class="{ opacity: show.indexOf(it) > -1 }"
        @mouseover="push(it)"
        class="item"
        v-for="it in 1000"
        :key="it"
      >
        〰
      </div>
      <div class="bg"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: [],
    };
  },
  methods: {
    push(it) {
      let data = this.show.find((item) => item == it);
      if (!data) this.show.push(it);
    },
  },
};
</script>

<style lang='less' scoped>
.app {
  background: #fb7299;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
}
.click-list {
  width: 6.6rem;
  height: 5rem;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
}
.item {
  font-size: 0.28rem;
  width: 0.6rem;
  height: 0.25rem;
  line-height: 0.25rem;
  text-align: center;
  background-color: #fb7299;
  cursor: pointer;
  opacity: 1;
  position: relative;
  z-index: 2;
  color: #ffffff;
  transition: 0.4s linear;
}
.opacity {
  opacity: 0;
}
.bg {
  background-image: url('https://img1.halobear.com/wedding/Fqbr5kHEWFGlqwf6URp2YmJBqgtv.jpg');
  background-position: center;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>