<template>
  <div class="blank-page center-flex">
    <img class="img" src="https://img1.halobear.com/wedding/Fl9GA24LcQeSKoZ29C__Fqx382o1.png" alt />
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoepd>
.blank-page {
  width: 100%;
  padding: 50px 0;
  text-align: center;
  margin: 0 auto;
  box-sizing: border-box;
}
@media screen and (max-width: @mobile-width) {
  .blank-page {
    width: 100%;
    padding: 0.5rem 0;
    text-align: center;
    margin: 0 auto;
    .img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>