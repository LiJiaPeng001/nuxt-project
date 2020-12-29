<template>
  <a-card title="修改密码" :bordered="false" class="card">
    <a-form-model
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-model-item label="旧密码" prop="pwd">
        <a-input placeholder="请输入旧密码" v-model="form.pwd" />
      </a-form-model-item>
      <a-form-model-item label="新密码" prop="newPwd">
        <a-input placeholder="请输入新密码" v-model="form.newPwd" />
      </a-form-model-item>
      <a-form-model-item label="确认密码" prop="enterPwd">
        <a-input placeholder="请再次输入新密码" v-model="form.enterPwd" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 2 }">
        <a-button type="primary" @click="onSubmit">确认修改</a-button>
      </a-form-model-item>
    </a-form-model>
  </a-card>
</template>

<script>
import * as Api from '@/api/user';
import authority from '@/utils/authority';

export default {
  data() {
    return {
      labelCol: { span: 2 },
      wrapperCol: { span: 5 },
      form: {
        pwd: '',
        newPwd: '',
        enterPwd: ''
      },
      rules: {
        pwd: [{ required: true, message: '请输入旧密码' }],
        newPwd: [{ required: true, message: '请输入新密码' }],
        enterPwd: [
          { required: true, message: '请再次输入新密码' },
          { validator: this.enterPwdValidate }
        ]
      }
    };
  },
  methods: {
    enterPwdValidate(rule, value, callback) {
      if (value === '') return callback();
      if (value && value !== this.form.newPwd) return callback('输入密码错误');
      callback();
    },
    onSubmit() {
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          await Api.updatePwd(this.form);
          this.$message.success('修改成功，请重新登录');
          authority.clear();
          this.$store.commit('user/SET_USER', { user: {} });
          window.location.reload();
        }
      });
    }
  }
};
</script>

<style>
</style>