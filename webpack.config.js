const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './client/js/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /.pug$/, use: [{ loader: 'pug-loader', options: { self: true }}] },
      { test: /\.pcss$/, use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'postcss-loader'] })}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css'),
    // new HtmlWebpackPlugin({
    //   welcome: 'This is a test',
    //   template: './views/index.pug',
    //   filename: 'index.pug',
    // }),
    // new HtmlWebpackPlugin({
    //   welcome: 'This is a grid example',
    //   template: './views/grid-example.pug',
    //   filename: 'grid-example.pug',
    // }),
  ],
  devServer: {
    contentBase: "./dist",
    hot: true
  },
}
