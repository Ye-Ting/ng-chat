/**
 * Created by yeting on 16/6/25.
 */

var webpackConfig = require('./webpack.config.js');
module.exports = function(config) {
  config.set({
    browsers: [
      'Chrome',
      //'Chrome_without_security'
    ],

    // ... normal karma configuration
    frameworks: ['jasmine'],
    files: [
      './node_modules/angular/angular.min.js',
      //'./node_modules/angular-mocks/angular-mocks.js',
      // all files ending in "_test"
      './src/test.js',
      // each file acts as entry point for the webpack configuration
    ],

    customLaunchers: {
      Chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security']
      }
    },

    preprocessors: {
      // add webpack as preprocessor
      './src/test.js': ['webpack'],
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true,
    },
  });
};
