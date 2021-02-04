<template>
  <home :list="list" :total="total" :cateList="cateList"></home>
</template>

<script>
import * as Api from '@/api/blog';
import * as cateApi from '@/api/cate';
import home from '@/components/index';

export default {
  components: {
    home,
  },
  watchQuery: ['page', 'title', 'cate_id'],
  async asyncData({ query }) {
    let { page = 1, title = '', cate_id = '' } = query;
    let [{ list, total }, { list: cateList }] = await Promise.all([
      Api.list({ page, per_page: 12, title, cate_id }),
      cateApi.list(),
    ]);
    return {
      list,
      total,
      cateList,
    };
  },
};
</script>