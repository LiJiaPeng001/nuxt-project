<template>
  <div class="test">
    <div class="title">test</div>
    <div class="subtitle">subtitle</div>
  </div>
</template>
  
<script>
import $login from '@/utils/$login';

export default {
  mounted() {
    $login();
  },
};
</script>
  
  <style>
</style>