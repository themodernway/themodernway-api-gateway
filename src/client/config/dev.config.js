const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './index',
  ],
  module: {
    rules: [{
        enforce: "pre",
        test: /\.js?$/,
        loader: 'source-map-loader',
        exclude: /node_modules/
      },
      {
        enforce: "pre",
        test: /\.tsx?$/,
        use: 'tslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 3,
            }
          },
          {
            loader: 'resolve-url-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [
                'app',
                'styles'
              ]
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    hot: true,
    stats: 'errors-only',
    publicPath: '/',
    // historyApiFallback: {
    //     index: 'index.html'
    // },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
}