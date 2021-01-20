<template>
  <a-result
    :status="String(error.statusCode)"
    :title="error.message"
    sub-title="Sorry, You are a SB!"
  >
    <template #extra>
      <a-button type="primary" @click="$router.push('/')">Back Home</a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog',
  mounted() {
    console.log(this.error, 'error');
  }
};
</script>

<style>
</style>