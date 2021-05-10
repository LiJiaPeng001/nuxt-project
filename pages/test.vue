<template>
  <div class="test">
    <button @click="toUpload">点击上传</button>
  </div>
</template>

<script>
import * as Api from "@/api/upload";
import { getFiles, getFileMD5 } from "@/utils/upload";

export default {
  methods: {
    async toUpload() {
      const files = await getFiles();
      let file = files[0];
      console.log(file, "file");
      let md5 = await getFileMD5(file);
      let formdata = new FormData();
      formdata.append("file", file);
      formdata.append("name", md5 + file.type.replace(/image\//gi, "."));
      let data = await Api.upload(formdata);
      console.log(data, "upload");
    },
  },
};
</script>

<style>
</style>
