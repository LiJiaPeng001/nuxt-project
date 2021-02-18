<template>
  <a-result :status="String(error.statusCode)" title="错误提示" sub-title="你进错页面了">
    <template #extra>
      <a-button type="primary" @click="$router.push('/')">返回首页</a-button>
    </template>
  </a-result>
</template>

<script>
export default {
  props: ['error'],
};
</script>

<style>
</style>