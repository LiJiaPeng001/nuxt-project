import request from "@/utils/request";

export const login = async data => {
  return request({
    url: "/api/login",
    method: "post",
    data
  });
};

export const getUserInfo = async (id = "") => {
  return request({
    url: `/api/user`,
    params: { id }
  });
};
export const fans = async params => {
  return request(
    {
      url: `/api/user-relation/fans`,
      params
    },
    {
      shouldLogin: true
    }
  );
};
export const setUserInfo = async params => {
  return request(
    {
      url: `/api/user`,
      method: "put",
      params
    },
    {
      shouldLogin: true
    }
  );
};
export const updatePwd = async data => {
  return request(
    {
      url: `/api/user/update`,
      method: "post",
      data
    },
    {
      shouldLogin: true
    }
  );
};
