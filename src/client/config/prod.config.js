const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    './index',
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
                options: {
                  minimize: true,
                  importLoaders: 3,
                  modules: true,
                  localIdentName: '[path]-[name]-[local]-[hash:base64:5]'
                }
              },
              {
                loader: 'resolve-url-loader',
              },
              {
                loader: 'postcss-loader',
              },
              {
                loader: 'sass-loader',
                options: {
                  includePaths: [
                    'app',
                    'styles'
                  ]
                }
              }
            ]
          }
        )
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.UglifyJsPlugin({
    })
  ]
};
