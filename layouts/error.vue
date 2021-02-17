<template>
  <a-config-provider :locale="locale">
    <a-result :status="String(error.statusCode)" title="错误提示" sub-title="你进错页面了">
      <template #extra>
        <a-button type="primary" @click="$router.push('/')">返回首页</a-button>
      </template>
    </a-result>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/es/locale/zh_CN';

export default {
  props: ['error'],
  data() {
    return {
      locale: zhCN,
    };
  },
};
</script>

<style>
</style>