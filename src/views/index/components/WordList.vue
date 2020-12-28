<template>
  <div class="word-list">
    <div class="word-item flex" v-for="it in initList" :key="it.id">
      <div @click="toUser(it)" class="cover" v-preview="it.user.avatar"></div>
      <div class="right-info">
        <div class="user-name middle-flex">
          <span class="text">{{ it.user.nickName || '未知用户' }}</span>
          <a-button @click="onFollowAction(it)" size="small" v-if="it.user.id != user.id">{{
            it.follow ? '取消关注' : '关注'
          }}</a-button>
        </div>
        <div class="create_at">{{ it.createdAt }}</div>
        <div class="content" v-if="it.content">{{ it.content }}</div>
        <div class="images middle-flex">
          <div
            class="image"
            v-for="(img, index) in it.images"
            :key="index"
            v-preview="img.url"
            @click="previewImage(index, it.images)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { changeStatus } from '@/api/user-relation';

export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      url: '',
      initList: [...this.list],
    };
  },
  watch: {
    list() {
      this.initList = [...this.list];
    },
  },
  computed: {
    user() {
      return this.$store.state.user.user;
    },
  },
  methods: {
    toUser(it) {
      this.$router.push({ path: '/user:id', params: { id: it.user.id } });
    },
    previewImage(index, imgs) {
      let images = [...imgs].map((item) => {
        return {
          ...item,
          src: item.url,
        };
      });
      this.$preview(images, { index });
    },
    async onFollowAction(data) {
      await changeStatus(data);
      this.initList.map((item) => {
        if (item.user.id == data.user.id) {
          item.follow = !item.follow;
        }
      });
    },
  },
};
</script>

<style lang='less' scoped>
.word-list {
  width: 632px;
  border-radius: 4px;
  overflow: hidden;
  min-height: 100vh;
  .word-item {
    position: relative;
    border-radius: 4px;
    min-width: 632px;
    background: #fff;
    margin-bottom: 8px;
    box-sizing: border-box;
    padding: 30px 30px 15px 30px;
    .cover {
      width: 48px;
      height: 48px;
      margin-right: 10px;
      flex-shrink: 0;
      border-radius: 50%;
    }
    .right-info {
      flex: 1;
      .user-name {
        color: #222;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 5px;
        .text {
          margin-right: 8px;
        }
      }
      .create_at {
        color: #99a2aa;
        font-size: 12px;
        margin-bottom: 10px;
      }
      .content {
        white-space: pre-wrap;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.5px;
        margin-bottom: 10px;
      }
      .images {
        flex-wrap: wrap;
        width: 342px;
        .image {
          width: 104px;
          height: 104px;
          border-radius: 4px;
          cursor: zoom-in;
          margin-right: 10px;
          margin-bottom: 10px;
          &::nth-of-type(3n + 0) {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>