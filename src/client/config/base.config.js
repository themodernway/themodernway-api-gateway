const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, '../app'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: "./",
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(otf|ttf|eot|svg|png|woff(2)?)(\?[a-zA-Z0-9=.]+)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[name].[ext]'
          }
        }]
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['app', 'node_modules', 'styles']
  },
  target: 'web',
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.ejs',
      title: 'React Play',
      hash: true,
    }),
    new webpack.NamedModulesPlugin()
  ]
}