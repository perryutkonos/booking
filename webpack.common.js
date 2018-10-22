'use strict';

const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {

  entry: {
    app: "./src/index",
  },

  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].js',
    publicPath: '/'
  },

  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },

  watch: true,

  module: { //Обновлено
    rules: [ //добавили babel-loader
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          "presets": ["env", "stage-0"],
        }
      }, {
        test: /\.(sass|scss)$/,
        loader: 'style-loader!css-loader!sass-loader?resolve url'

      },{
        test: /\.(html)$/,
        loader: 'file-loader?name=[name].[ext]'
      }, {
        test: /(jpe?g|png|gif|svg|img)$/i,
        loader: 'file-loader'
      }, {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }, {
        test: /\.css/,
        loader: 'style-loader!css-loader?resolve url'

      }
    ]
  },

  plugins: [
    new VueLoaderPlugin()
  ]
}