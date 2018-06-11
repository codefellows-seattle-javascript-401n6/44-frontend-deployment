const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle-[hash].js',
  },
  plugins: [new HtmlPlugin({ template: `${__dirname}/index.html`})],
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(css|scss)/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(pdf|jpg|png|gif|svg|ico)$/, use: [{ loader: 'url-loader' },]}
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
}
