const apiMap = {
  development: 'http://localhost:10086',
  production: 'http://47.97.109.250:10086',
}

const baseURL = apiMap[process.env.NODE_ENV]

module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#00a1d6',
            'error-color': '#f66495',
            'text-color': '#212121',
          }, // 定制主题
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: baseURL,
        changeOrigin: true,
      },
    },
  },
}
