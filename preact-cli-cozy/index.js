const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = function (config, helpers) {
  let plugins = helpers.getPluginsByName(config, 'HtmlWebpackPlugin')[0];
  if (!plugins) {
    return config
  }
  const { plugin: htmlWebpackPlugin } = plugins
  htmlWebpackPlugin.options.template = `!!ejs-loader!${path.resolve(__dirname, './template.html')}`;

  config.plugins.push(new CopyPlugin([{
    from: 'manifest.webapp',
    to: 'manifest.webapp'
  }]))

  config.externals = {
    'cozy-client-js': 'cozy'
  }

  let port = process.env.PORT || config.port || 3000,
    host = process.env.HOST || config.host || '0.0.0.0',
    origin = `${config.https===true?'https':'http'}://${host}:${port}/`;

  config.output.publicPath = origin
  config.devServer.headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  }
  return config
}