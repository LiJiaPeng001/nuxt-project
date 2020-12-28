<template>
  <my-dialog v-model:visible="visible">
    <div class="check-in">
      <img src="../image/close.png" class="close" @click="close()" alt />
      <div class="title text">登录李小朋 (゜-゜)つロ</div>
      <a-input
        size="large"
        placeholder="请输入用户名"
        class="input"
        v-model:value="payload.userName"
      ></a-input>
      <a-input
        size="large"
        placeholder="请输入密码"
        class="input"
        v-model:value="payload.password"
      ></a-input>
      <a-button type="primary" class="submit-btn" @click="onSubmit" size="large">登录</a-button>
    </div>
  </my-dialog>
</template>

<script>
import { reactive } from 'vue';
import { Input, Button } from 'ant-design-vue';
import myDialog from '../BaseDialog';

export default {
  components: {
    aButton: Button,
    aInput: Input,
    myDialog,
  },
  setup() {
    let payload = reactive({
      userName: 'lijiapeng',
      password: '131452',
    });
    return {
      payload,
    };
  },
  data() {
    return {
      visible: false,
      resolve: () => {},
      reject: () => {},
    };
  },
  methods: {
    close() {
      this.visible = false;
      this.reject();
    },
    async onSubmit() {
      console.log(this.payload, 'payload');
      await this.$store.dispatch('user/login', this.payload);
      this.visible = false;
      this.resolve();
    },
  },
};
</script>

<style lang='less' scoped>
.check-in {
  background-color: #fff;
  width: 460px;
  padding: 50px 40px 40px 40px;
  border-radius: 4px;
  position: relative;
  .close {
    position: absolute;
    width: 15px;
    height: 15px;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    color: #222222;
    text-align: center;
    margin-bottom: 30px;
  }
  .input {
    margin-bottom: 18px;
  }
  .submit-btn {
    width: 100%;
  }
}
</style>