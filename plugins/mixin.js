import Vue from "vue";

export default () => {
  Vue.mixin({
    methods: {
      submitImage(images = []) {
        return !images.length ? "" : images[0].url;
      }
    }
  });
}
