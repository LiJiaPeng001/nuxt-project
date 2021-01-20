import Vue from "vue";
import { imgUrl } from "@/utils/contants";

export default () => {
  Vue.directive("preview", function(el, options) {
    const { value = "" } = options;
    el.setAttribute("src", imgUrl);
    el.style.backgroundImage = `url(${imgUrl})`;
    el.style.backgroundPosition = "center";
    el.style.backgroundSize = "contain";
    el.style.backgroundColor = "#93b4e7";
    el.style.backgroundRepeat = "no-repeat";
    let img = new Image();
    img.src = value;
    img.onload = function() {
      el.setAttribute("src", value);
      el.style.backgroundImage = `url(${value})`;
      el.style.backgroundSize = "cover";
    };
  });
};
