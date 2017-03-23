var webpack = require('webpack'),
    path = require('path'),
    ExtractPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    autoprefixer = require('autoprefixer');
    
var DEBUG = process.env.NODE_ENV !== 'production' ? true : false;

var style_loaders = 'css-loader!postcss-loader!sass-loader';
console.log(process.env.NODE_ENV);
const common = {
  devtool: DEBUG ? 'source-map' : '',
  entry: {
    "app": './src/app/app.js',
    "vendor.bundle.js": ['./src/app/vendor.js']
  },
  output: {
    path: path.join(path.resolve(__dirname, "dist")),
    filename: 'js/[name].bundle.js',
    publicPath: ''
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name].bundle.js',
      minChunks: Infinity
    }),
    new ExtractPlugin('app.bundle.css'),
    new webpack.DefinePlugin({
      'process.env.env': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ]
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [ 'react', 'es2015' ] 
        },
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.sass|\.scss)$/, 
        loader: ExtractPlugin.extract({
          'fallback': 'style-loader',
          'use': style_loaders
        }),
        exclude: /(node_modules|bower_components)/,
      },
      { 
        test: /\.(png|gif|jpe?g|svg)$/,
        loaders: 'url-loader',
        options: { 
          limit: 1000,
          name: 'images/[hash].[ext]'
        },
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /favicon\.ico$/,
        loader: 'url-loader',
        options: { 
          limit: 1,
          name: '[name].[ext]',
        },
      },
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx', '.css', '.sass', '.scss', '.png', '.jpg', '.jpeg', '.svg' ]
  }
}

module.exports = common;