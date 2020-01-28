const merge = require('webpack-merge');
const baseConfig = require('./app.base.config.js');

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  mode: 'development'
});