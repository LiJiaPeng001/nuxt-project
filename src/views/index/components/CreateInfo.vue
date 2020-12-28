<template>
  <div class="create-info">
    <!-- 文章 -->
    <textarea class="editor" placeholder="有什么想和大家分享的？" v-model="payload.content" />
    <div class="action-items middle-flex">
      <div class="upload-box">
        <a-popover v-model="visible" title="图片上传" trigger="click" placement="bottomLeft">
          <template #content style="max-width: 580px">
            <upload-qn :limit="9" v-model="payload.images"></upload-qn>
          </template>
          <i @click="visible = true" class="iconfont text icon-tupian"></i>
        </a-popover>
      </div>
      <div
        class="submit-btn center-flex"
        @click="onSubmit"
        :class="{ opacity: payload.content || (payload.images && payload.images.length) }"
      >
        发布
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      visible: false,
      actions: [{ icon: 'icon-tupian', key: 'image' }],
      payload: { ...this.data },
    };
  },
  watch: {
    data: {
      deep: true,
      handler() {
        this.payload = { ...this.data };
      },
    },
  },
  methods: {
    async onSubmit() {
      this.$emit('ok', this.payload);
    },
  },
};
</script>

<style lang='less' scoped>
.create-info {
  padding: 16px;
  border-radius: 4px;
  background-color: #fff;
  position: relative;
  .editor {
    resize: none;
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    border: none;
    display: block;
    width: 100%;
    min-height: 22px;
    max-height: 300px;
    letter-spacing: 1px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    white-space: pre-wrap;
    color: #222;
    background-color: #fff;
    font-size: 14px;
    outline: none;
    line-height: 22px;
    border-radius: 4px;
    word-break: break-word;
    margin-bottom: 20px;
  }
  .action-items {
    justify-content: space-between;
    .upload-box {
      .iconfont {
        font-size: 24px;
      }
    }
  }
  .submit-btn {
    width: 70px;
    height: 32px;
    outline: none;
    background-color: #fb7299;
    color: #fff;
    border: none;
    border-radius: 4px;
    opacity: 0.6;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
  .opacity {
    opacity: 1;
  }
}
</style>