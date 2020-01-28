const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],

  output: {
    path: path.resolve(__dirname + '/../public/'),
    filename: devMode ? 'js/bundle.js' : 'js/bundle.[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: { extensions: ['.js', '.jsx'] },
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      }
    ]
  },

  devServer: {
    contentBase: './public',
    historyApiFallback: true
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    })
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
    ]
  }
  
  
};