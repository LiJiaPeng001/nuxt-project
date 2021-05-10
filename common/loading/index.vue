<template>
  <div class="fixed-loading center-flex" v-show="visible">
    <a-spin tip="加载中..."> </a-spin>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
};
</script>

<style lang="less" scoped>
.fixed-loading {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 9;
  left: 0;
  top: 0;
}
</style>
