<template>
  <a-card title="基本信息" :bordered="false" class="card">
    <a-form-model
      ref="ruleForm"
      :model="form"
      :rules="rules"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
    >
      <a-form-model-item label="昵称" prop="nickName">
        <a-input placeholder="请输入您的昵称" v-model="form.nickName" />
      </a-form-model-item>
      <a-form-model-item label="头像" prop="avatar">
        <upload-qn v-model="form.avatar"></upload-qn>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 2 }">
        <a-button type="primary" @click="onSubmit">提交</a-button>
      </a-form-model-item>
    </a-form-model>
  </a-card>
</template>

<script>
export default {
  props: {
    payload: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      labelCol: { span: 2 },
      wrapperCol: { span: 5 },
      form: { ...this.payload },
      rules: {},
    };
  },
  watch: {
    payload: {
      deep: true,
      handler() {
        this.form = { ...this.payload };
      },
    },
  },
  methods: {
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('update:payload', this.form);
          this.$emit('submit');
        }
      });
    },
  },
};
</script>

<style>
</style>