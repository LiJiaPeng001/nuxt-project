<template>
  <div class="upload-qn middle-flex">
    <div class="upload-icon upload-item" v-for="(it, i) in value" :key="i">
      <img class="img" :src="it.url" />
      <div class="action-wrapper center-flex">
        <a-icon @click="remove(i)" class="delete" type="delete" />
        <a-icon @click="preview(i)" type="eye" />
      </div>
    </div>
    <div
      class="upload-icon center-flex"
      v-show="value.length < limit"
      @click="upload"
    >
      <a-icon class="icon" type="plus" />
      <div class="text">上传</div>
    </div>
  </div>
</template>

<script>
import upload from '@/utils/upload';

export default {
  model: {
    event: 'change'
  },
  props: {
    limit: {
      type: Number,
      default: 1
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      images: [...this.value]
    };
  },
  watch: {
    value() {
      this.images = [...this.value];
    }
  },
  methods: {
    remove(i) {
      this.images.splice(i, 1);
      this.change();
    },
    preview(i) {
      console.log(i, '预览');
    },
    async upload() {
      const data = await upload({ limit: this.limit - this.images.length });
      this.images.push(...data);
      this.change();
    },
    change() {
      this.$emit('change', this.images);
    }
  }
};
</script>

<style lang='less' scoped>
@primaryColor: #00a1d6;
@textColor: #212121;

.upload-qn {
  flex-wrap: wrap;
  .upload-icon {
    width: 128px;
    height: 128px;
    margin-right: 8px;
    margin-bottom: 8px;
    background-color: #fafafa;
    border: 1px dashed #d9d9d9;
    border-radius: 4px;
    cursor: pointer;
    transition: border-color 0.3s ease;
    flex-direction: column;
    color: #999999;
    overflow: hidden;
    &:hover {
      border-color: @primaryColor;
    }
    .icon {
      font-size: 30px;
    }
    .img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      background-color: #eeeeee;
    }
  }
  .upload-item {
    border: none;
    position: relative;
    .action-wrapper {
      display: none;
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 2;
      top: 0;
      left: 0;
      font-size: 20px;
      color: #fff;
      transition: 0.2s linear;
      .delete {
        margin-right: 10px;
      }
    }
    &:hover {
      .action-wrapper {
        display: flex;
      }
    }
  }
}
</style>