<template>
  <home></home>
</template>

<script>
import * as Api from '@/api/blog';
import home from '@/components/index';

export default {
  components: {
    home,
  },
  watchQuery: ['page'],
  async asyncData({ app, query }) {},
};
</script>