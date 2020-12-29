<template>
  <div class="news-list">
    <List :list="list"></List>
  </div>
</template>

<script>
import List from '@/components/index/components/WordList';

export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {
    List
  }
};
</script>

<style lang='less' scoepd>
.news-list {
  position: relative;
  margin: 15px 0;
}
</style>