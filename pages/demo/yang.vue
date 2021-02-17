<template>
  <div class="app">
    <div :class="{ opacity: show.indexOf(it) > -1 }" @mouseover="push(it)" class="item">李</div>
    <div :class="{ opacity: show.indexOf(it) > -1 }" @mouseover="push(it)" class="item">某</div>
    <div :class="{ opacity: show.indexOf(it) > -1 }" @mouseover="push(it)" class="item">某</div>
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

<style>
.app {
  background: #fb7299;
  height: 60vw;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  position: relative;
  width: 80vw;
  margin: 40px auto;
}
.item {
  font-size: 0.28rem;
  width: 8vw;
  height: 6vw;
  line-height: 6vw;
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
}
</style>