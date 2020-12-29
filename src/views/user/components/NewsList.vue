<template>
  <div class="news-list page">
    <word-list :list="list"></word-list>
  </div>
</template>

<script>
import * as Api from '@/api/blog';
import wordList from '@/views/index/components/WordList';

export default {
  components: {
    wordList,
  },
  data() {
    let { id = '' } = this.$route.params;
    return {
      id,
      list: [],
      total: 0,
    };
  },
  mounted() {
    this.id && this.fetchList();
  },
  methods: {
    async fetchList() {
      let { list, total } = await Api.list(this.payload);
      this.list = list;
      this.total = total;
    },
  },
};
</script>

<style lang='less' scoepd>
.news-list {
  position: relative;
  margin: 15px auto 0;
}
</style>