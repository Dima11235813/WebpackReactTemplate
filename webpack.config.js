const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

//commonJs syntax
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module:{
      rules:[
          {
              test: /\.js$/,//includes jsx since $ //??
              exclude: /node_modules/,
              use:{
                  loader: 'babel-loader'
              }
          }
      ]
  },
  plugins:[
      new HtmlWebpackPlugin(
          {
              template: './src/index.html'
          }
      )
  ]
};