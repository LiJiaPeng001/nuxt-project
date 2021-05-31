<template>
  <div class="upload-qn center-flex">
    <div class="upload-box" v-show="images.length">
      <textarea class="textarea" :value="imageText"></textarea>
      <div class="upload-list">
        <div
          class="upload-item"
          @click="preview(i)"
          v-for="(it, i) in images"
          :key="i"
        >
          <img class="img cover" :src="it.url" />
        </div>
      </div>
    </div>
    <div
      class="upload-icon"
      @dragenter.prevent="enter"
      @dragover.prevent
      @dragleave.prevent="leave"
      @drop.prevent="drop"
      @click="upload"
    >
      <div class="upload-events center-flex">
        <img src="./images/iu.gif" class="cover" v-show="loading" />
        <i class="iconfont icon-upload icon"></i>
        <div class="text">拖拽或者点击上传</div>
      </div>
    </div>
  </div>
</template>

<script>
import upload, { upload as singleUpload } from "@/utils/upload";

export default {
  head() {
    return {
      meta: [{ name: "referrer", content: "no-referrer" }],
    };
  },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      images: [...this.value],
      loading: false,
    };
  },
  computed: {
    imageText() {
      return this.images.reduce((all, item) => {
        all += item.url + "\n";
        return all;
      }, "");
    },
  },
  watch: {
    value() {
      this.images = [...this.value];
    },
  },
  mounted() {
    console.log(this.$message);
    window.addEventListener("paste", this.onPaste);
  },
  beforeDestroy() {
    window.removeEventListener("paste", this.onPaste);
  },
  methods: {
    async onPaste(e) {
      const { files = [] } = e.clipboardData;
      for (let index = 0; index < files.length; index++) {
        const item = files[index];
        if (!item.type.includes("image")) continue;
        const data = await singleUpload({ file: item });
        this.images.push(data);
      }
    },
    enter() {
      this.loading = true;
    },
    leave() {
      this.loading = false;
    },
    async drop(e) {
      let files = e.dataTransfer.files;
      for (let index = 0; index < files.length; index++) {
        const item = files[index];
        const data = await singleUpload({ file: item });
        this.images.push(data);
      }
      this.loading = false;
    },
    preview(index) {
      this.$preview(
        this.images.map((it) => ({ src: it.url })),
        { index }
      );
    },
    async upload() {
      const data = await upload({ limit: 10 });
      this.images.push(...data);
    },
  },
};
</script>

<style lang='less' scoped>
@primaryColor: #00a1d6;
@textColor: #212121;

.upload-box {
  position: absolute;
  top: 10px;
  left: 10px;
  .textarea {
    width: 540px;
    height: 400px;
    border: none;
    border-radius: 6px 6px 0 0;
    padding: 8px;
    box-sizing: border-box;
  }
  .upload-list {
    width: 540px;
    display: flex;
    overflow-x: auto;
    background-color: #ffffff;
    .upload-item {
      flex-shrink: 0;
      width: 100px;
      height: 100px;
      position: relative;
      border: 1px dashed #d9d9d9;
      border-radius: 4px;
      cursor: pointer;
      .img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}

.upload-qn {
  height: calc(100vh - 200px);
  flex-wrap: wrap;
  position: relative;
  .upload-events {
    width: 100%;
    height: 100%;
    flex-direction: column;
    pointer-events: none;
  }
  .upload-icon {
    width: 460px;
    height: 320px;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 5px 2px #eee;
    border-radius: 4px;
    cursor: pointer;
    transition: border-color 0.3s ease;
    font-size: 20px;
    color: #68676c;
    position: relative;
    &:hover {
      border-color: @primaryColor;
    }
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
    .icon {
      font-size: 40px;
    }
  }
}
</style>
