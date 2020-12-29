const apiMap = {
  development: 'http://localhost:10086',
  production: 'http://api.mcljp.com',
}
export const baseURL = apiMap[process.env.NODE_ENV]
