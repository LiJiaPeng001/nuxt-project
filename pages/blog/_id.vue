<template>
  <detail :data="data"></detail>
</template>

<script>
import * as Api from "@/api/blog";
import detail from "@/components/blog-detail";

export default {
  components: {
    detail,
  },
  async asyncData({ params }) {
    let { id = "" } = params;
    let data = await Api.detail(id);
    return {
      data,
    };
  },
  head() {
    return {
      title: this.data.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.data.title,
        },
        {
          hid: "keyword",
          name: "keyword",
          content: (this.data.cate || {}).name,
        },
      ],
    };
  },
};
</script>
