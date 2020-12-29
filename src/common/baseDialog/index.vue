<template>
  <div :class="[{ visible: visible }, direction]" class="my-dialog-container">
    <div @click.stop class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'center'
    }
  },
  methods: {
    cancel() {
      this.$emit('update:visible', false);
      this.$emit('cancel');
    },
    toOk() {
      this.$emit('update:visible', false);
      this.$emit('ok');
    }
  }
};
</script>

<style lang="less" scoped>
.my-dialog-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 0.5s;
  visibility: hidden;
  opacity: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  &.center {
    align-items: center;
    .dialog-content {
      opacity: 0;
      transform: scale(1.1);
    }
  }
  &.bottom {
    align-items: flex-end;
    .dialog-content {
      transform: translateY(100%);
    }
  }
  &.visible {
    visibility: visible;
    opacity: 1;
    &.center .dialog-content {
      transform: scale(1);
      transition-timing-function: cubic-bezier(0.8, 0, 0, 1.5);
      opacity: 1;
    }
    &.bottom {
      .dialog-content {
        transform: translateY(0);
      }
    }
  }
  .dialog-content {
    position: relative;
    transition: 0.5s;
  }
}
</style>
