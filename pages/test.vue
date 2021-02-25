<template>
  <div class="test">
    <a-button @click="send">点击发送formData数据</a-button>
  </div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

export default {
  methods: {
    send() {
      let data = { name: '李家朋', phone: 13673717028 };
      axios({
        url: '/api/koa-blog/cate',
        method: 'post',
        data: qs.stringify(data),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        success() {
          console.log('222');
        },
      });
    },
  },
};
</script>

<style>
</style>
