export const tokenKey = "nuxt_blog_token";
/**
 * @desc 根据name读取cookie
 * @return {String} cookie
 */
function getCookie(cookie = "") {
  const arr = cookie.replace(/\s/g, "").split(";");
  for (let i = 0; i < arr.length; i++) {
    const tempArr = arr[i].split("=");
    if (tempArr[0] === tokenKey) {
      return decodeURIComponent(tempArr[1]);
    }
  }
  return "";
}

/**
 * @desc  设置Cookie
 * @param {String} value
 * @param {Number} days
 */
function setCookie(value, days = 30) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  document.cookie =
    tokenKey + "=" + encodeURIComponent(value) + ";expires=" + date + ";path=/";
}

/**
 * @desc 根据name删除cookie
 * @param  {String} name
 */
function removeCookie() {
  // 设置已过期，系统会立刻删除cookie
  setCookie("", -1);
}

export default {
  get: getCookie,
  set: setCookie,
  remove: removeCookie
};
