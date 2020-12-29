<template>
  <div class="navigator middle-flex page-content">
    <div
      class="nav-item center-flex"
      :class="{ 'active-nav': it.key === nav }"
      v-for="it in navList"
      :key="it.key"
      @click="updateKey(it.key)"
      @mouseover="onMouseOver(it.key)"
      @mouseleave="onMouseLeave"
    >
      <i :style="{ color: it.color }" :class="`iconfont ${it.icon}`"></i>
      <div class="text">{{ it.title }}</div>
    </div>
    <div :style="borderStyle" class="n-cursor"></div>
  </div>
</template>

<script>
export default {
  props: {
    navList: {
      type: Array,
      default: () => [],
    },
    nav: {
      type: String,
      default: 'home',
    },
  },
  data() {
    return {
      overKey: this.nav,
    };
  },
  watch: {
    nav() {
      this.overKey = this.nav;
    },
  },
  computed: {
    borderStyle() {
      let { overKey } = this;
      let current = this.navList.findIndex((it) => it.key === overKey);
      return {
        left: `${50 * current + current * 30 + 20}px`,
      };
    },
  },
  methods: {
    onMouseOver(key) {
      this.overKey = key;
    },
    onMouseLeave() {
      this.overKey = this.nav;
    },
    updateKey(key) {
      this.$emit('update:nav', key);
    },
  },
};
</script>

<style lang='less' scoped>
.navigator {
  height: 66px;
  background: #fff;
  box-shadow: 0 0 0 1px #eee;
  border-radius: 0 0 4px 4px;
  padding: 0 20px;
  position: relative;
  margin-bottom: 20px;
  .n-cursor {
    width: 50px;
    height: 3px;
    transition: all 0.2s ease;
    position: absolute;
    bottom: -1px;
    background-color: #00a1d6;
  }
  .nav-item {
    height: 66px;
    margin-right: 30px;
    cursor: pointer;
    color: #222;
    .iconfont {
      font-size: 20px;
      margin-right: 4px;
    }
    .text {
      font-size: 13px;
    }
  }
  .active-nav {
    color: #00a1d6;
  }
}
</style>