const merge = require('webpack-merge');
const baseConfig = require('./config/base.config');

module.exports = function (env) {
  if (!env) {
    env = 'dev';
  }
  return merge(baseConfig, require('./config/' + env + '.config.js'));
}