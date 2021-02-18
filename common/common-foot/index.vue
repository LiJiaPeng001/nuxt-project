<template>
  <div class="common-footer">
    <div class="footer-box middle-flex">
      <a href="https://beian.miit.gov.cn/" class="num">豫ICP备2021001989号</a>
      <div class="title">©2021 李小朋</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.common-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #212121;
  .footer-box {
    width: 1190px;
    margin: 0 auto;
    height: 100px;
    box-sizing: border-box;
    color: #fff;
    font-weight: 500;
    justify-content: space-between;
    .num {
      color: #fff;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
@media screen and (max-width: @mobile-width) {
  .common-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #212121;
    .footer-box {
      width: 100%;
      margin: 0 auto;
      height: 1rem;
      box-sizing: border-box;
      color: #fff;
      font-weight: 500;
      justify-content: space-between;
      font-size: 0.2rem;
      padding: 0 0.2rem;
      .num {
        color: #fff;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>