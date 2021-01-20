import request from "@/utils/request";

export const add = async data => {
  return request(
    {
      url: "/api/blog",
      method: "post",
      data
    },
    {
      shouldLogin: true
    }
  );
};
export const list = function(params) {
  return this.$http({
    url: "/api/blog",
    params
  });
};
