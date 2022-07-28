const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  productionSourceMap: false,
  devServer: {
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/pq-web': {
        target: 'https://xxx.com/',
        ws: false,
        changOrigin: true
      }
    }
  },
  chainWebpack (config) {
    config.resolve.alias.set('@', resolve('src'))
  }
}
