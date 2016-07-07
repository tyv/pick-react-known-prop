var path = require('path');
var webpack = require('webpack');

module.exports = {

  debug: false,

  entry: {
    index: './src/index.js',
    test: './test/index.js'
  },

  output: {
    path: './dist',
    libraryTarget: 'commonjs2',
    filename: '[name].js'
  },

  resolve: {
    modulesDirectories: [
      'node_modules',
      'src/lib'
    ]
  },

  module: {
    loaders: [{
      test: /\.js$/,
      include: [
        path.resolve(__dirname, './src'),
        path.resolve(__dirname, './test')
      ],
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
}
