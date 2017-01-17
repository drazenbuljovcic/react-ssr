var webpack = require('webpack'),
    path = require('path'),
    ExtractPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    autoprefixer = require('autoprefixer');

var DEBUG = process.env.NODE_ENV !== 'production' ? true : false;
var HMR = process.env.NODE_ENV === 'dev-hmr' ? true : false;

var style_loaders = 'css-loader!postcss-loader!sass';

const common = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/app/app.js'
  ],
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [    
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["react", "es2015", "react-hmre" ]
        }
      },
      {
        test: /\.sass$/,
        loader: 'style!' + style_loaders
      }
    ]
  }
}
module.exports = common;