const apiMap = {
  development: 'http://localhost:10086',
  production: 'http://mcljp.com:10086',
}

export const baseURL = apiMap[process.env.NODE_ENV]
