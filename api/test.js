import request from "@/utils/request";

export const test = async () => {
  return request({
    url: "/api"
  });
};
