var webpack = require('webpack'),
    path = require('path'),
    ExtractPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    autoprefixer = require('autoprefixer');

var DEBUG = process.env.NODE_ENV !== 'production' ? true : false;

var style_loaders = 'css-loader!postcss-loader!sass';

const common = {
  devtool: DEBUG ? 'source-map' : '',
  entry: {
    "app": './src/app/app.js',
    "vendor": ['./src/app/vendor.js']
  },
  output: {
    path: path.join(path.resolve(__dirname, "dist")),
    filename: 'app.bundle.js',
    publicPath: ''
  },
  postcss: [
    autoprefixer({})
  ],
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js',
      minChunks: Infinity
    }),
    new ExtractPlugin('app.bundle.css')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [ "react", "es2015" ]
        }
      },
      {
        test: /\.sass$/,
        loader: ExtractPlugin.extract('style', style_loaders)
      }
    ]
  }
}

module.exports = common;