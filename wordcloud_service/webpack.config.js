const path = require('path');
const webpack = require('webpack');

var config = {
  entry: './frontend/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader'
        }],
      }
    ]
  },
  plugins: [
  ],
  devtool: 'source-map'
};

module.exports = config;
