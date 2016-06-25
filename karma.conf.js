/**
 * Created by yeting on 16/6/25.
 */
module.exports = function(config) {
  config.set({
    // ... normal karma configuration
    frameworks: ['jasmine'],
    files: [
      // all files ending in "_test"
      './src/test.js',
      // each file acts as entry point for the webpack configuration
    ],

    preprocessors: {
      // add webpack as preprocessor
      './src/test.js': ['webpack'],
    },

    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // webpack configuration
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      noInfo: true,
    },
  });
};
