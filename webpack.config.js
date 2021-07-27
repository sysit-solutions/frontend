const _ = require('lodash')
const HtmlPlugin = require('html-webpack-plugin')
const config = require('@freenit-framework/cli')

const defaultConfig = config.webpack(__dirname)

const myconfig = {
  plugins: [
    ...defaultConfig.plugins,
    new HtmlPlugin({ favicon: 'favicon.ico', template: 'index.html' }),
  ],
}

const webpackConfig = _.merge(defaultConfig, myconfig)
webpackConfig.devServer.allowedHosts = 'all'
const target = process.env.BACKEND_URL
if (target) {
  webpackConfig.devServer.proxy = {
    '/api': { target },
  }
}

module.exports = webpackConfig
