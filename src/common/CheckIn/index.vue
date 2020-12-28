<template>
  <my-dialog v-model:visible="visible">
    <div class="check-in">
      <img src="../image/close.png" class="close" @click="close()" alt />
      <div class="title text">登录李小朋 (゜-゜)つロ</div>
      <a-form-model
        ref="form"
        class="form-wrapper"
        :model="payload"
        :wrapper-col="wrapperCol"
        :rules="rules"
      >
        <a-form-model-item prop="userName">
          <a-input
            size="large"
            placeholder="请输入用户名"
            class="input"
            v-model="payload.userName"
          ></a-input>
        </a-form-model-item>
        <a-form-model-item prop="password">
          <a-input-password
            size="large"
            placeholder="请输入密码"
            class="input"
            v-model="payload.password"
          ></a-input-password>
        </a-form-model-item>
      </a-form-model>
      <a-button type="primary" class="submit-btn" @click="onSubmit" size="large">登录</a-button>
    </div>
  </my-dialog>
</template>

<script>
import myDialog from '../BaseDialog';

export default {
  components: {
    myDialog,
  },
  data() {
    return {
      visible: false,
      payload: {
        userName: 'lijiapeng',
        password: '131452',
      },
      rules: {
        userName: [
          {
            required: true,
            message: '请输入用户名',
          },
          {
            pattern: /\w{6,8}/g,
            message: '请输入长度6-8位的用户名，只可为数字和字母',
          },
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
          },
          {
            min: 6,
            max: 18,
            message: '请输入长度6-18位的密码，只可为数字和字母',
          },
        ],
      },
      wrapperCol: { span: 24 },
      resolve: () => {},
      reject: () => {},
    };
  },
  methods: {
    close() {
      this.visible = false;
      this.reject();
    },
    onSubmit() {
      this.$refs.form.validate(async (err) => {
        if (!err) return;
        await window.$nuxt.$store.dispatch('user/login', this.payload);
        this.visible = false;
        this.resolve();
      });
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
  .form-wrapper {
    margin-bottom: 30px;
  }
  .submit-btn {
    width: 100%;
  }
}
</style>