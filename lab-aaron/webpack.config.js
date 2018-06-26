'use strict';

const HtmlPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  devtool: 'source-map',
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlPlugin({template: __dirname + '/src/index.html'}),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: ['babel-loader'], exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        loader: ['style-loader', 'css-loader', 'sass-loaders'],
      },
    ]
  }
};

module.exports = config;