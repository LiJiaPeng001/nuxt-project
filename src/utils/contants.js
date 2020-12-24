const devApi = "http://localhost:10086";
const prodApi = "http://api.mcljp.com";

export const baseURL =
  process.env.NODE_ENV === "development" ? devApi : prodApi;

export const imgUrl =
  "https://img1.halobear.com/app/dc142231c81c5c00a452e60289f7bec6.jpg";
