export const imgUrl = 'https://img1.halobear.com/wedding/FlhPh9u0ypAlzbxey-YjolnrqT2h.jpg'

export const apiMaps = {
  development: 'http://127.0.0.1:1202',
  production: 'http://47.97.109.250:1202',
}

export const baseURL = apiMaps[process.env.NODE_ENV]
