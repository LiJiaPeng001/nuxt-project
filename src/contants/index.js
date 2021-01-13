const apiMap = {
  development: 'http://localhost:10086',
  production: 'http://47.97.109.250:10086',
}

export const baseURL = apiMap[process.env.NODE_ENV]
