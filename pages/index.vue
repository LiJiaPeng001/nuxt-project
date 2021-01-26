<template>
  <home :list="list" :total="total"></home>
</template>

<script>
import * as Api from '@/api/blog';
import home from '@/components/index';

export default {
  components: {
    home,
  },
  watchQuery: ['page'],
  async asyncData({ query }) {
    let { page = 1 } = query;
    let { list, total } = await Api.list({ page, per_page: 12 });
    return {
      list,
      total,
    };
  },
};
</script>