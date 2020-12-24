const apiMap = {
  development: 'http://localhost:10086',
  production: 'http://api.mcljp.com',
}
const Api = apiMap[process.env.NODE_ENV]

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: Api,
        changeOrigin: true,
      },
    },
  },
}
