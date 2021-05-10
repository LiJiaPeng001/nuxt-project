<template>
  <div class="body">
    <common-head></common-head>
    <div class="nuxt">
      <Nuxt />
    </div>
    <common-foot></common-foot>
    <to-top></to-top>
  </div>
</template>

<script>
import CommonHead from "@/common/common-head";
import CommonFoot from "@/common/common-foot";
import ToTop from "@/common/to-top";

export default {
  components: {
    CommonHead,
    CommonFoot,
    ToTop,
  },
};
</script>

<style lang='less' scoped>
.body {
  background-color: #f0f2f5;
  min-height: 100vh;
  position: relative;
  padding-bottom: 100px;
  min-width: 1190px;
  display: flex;
  flex-direction: column;
  .nuxt {
    flex: 1;
  }
}
@media screen and (max-width: @mobile-width) {
  .body {
    background-color: #f0f2f5;
    min-height: 100vh;
    position: relative;
    padding-bottom: 100px;
    width: 100%;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    .nuxt {
      flex: 1;
    }
  }
}
</style>
