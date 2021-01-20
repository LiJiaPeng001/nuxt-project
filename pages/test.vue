<template>
  <div class="title">我是你爸爸</div>
</template>

<script>
import * as Api from '@/api/test';

export default {
  mounted() {
    Api.test();
  }
};
</script>

<style>
</style>