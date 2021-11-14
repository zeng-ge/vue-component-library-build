const isDev = process.env.NODE_ENV !== 'developmen t'
const resolve = isDev ? { mainFields: ['main'] } : {}
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve,
  }
}
