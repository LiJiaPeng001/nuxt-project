export const imgUrl = 'https://img1.halobear.com/wedding/FlhPh9u0ypAlzbxey-YjolnrqT2h.jpg'
const env = process.env.NODE_ENV
// const env = 'production'

export const apiMaps = {
  development: 'http://127.0.0.1:1202',
  production: 'https://www.ljpeng.fun',
}

export const baseURL = apiMaps[env]
