var path = require('path');

module.exports = {
  /**
   * Couple options here:
   * - string: Path to file you want turned into a module ('./main')
   * - array: Paths to files you want turned into a module (['./main', './other'])
   * - object: Use this for multiple bundles (see example below)
   *
   * More info: https://webpack.github.io/docs/configuration.html#entry
   */
  entry: {
    main: ['./app/scripts/main.js'],
    vendor: ['jquery', 'underscore']
  },

  /**
   * Lots of options for output. Most importantly, if you're using multiple bundles
   * in 'entry', you'll need to define the module names like so: '[name].aBundleName.js'.
   * See example below.
   *
   * 'path' is also require - absolute path to dist files (shouldn't need to change this)
   *
   * More info: https://webpack.github.io/docs/configuration.html#output
   */
  output: {
    path: path.join(__dirname, 'dist/scripts/'),
    publicPath: 'scripts/',
    filename: '[name].js',

    // libraryTarget: 'umd',    // creating a module? uncomment these?
    // umdNamedDefine: true     // this guy, too!
  },

  /**
   * Externals are handy if you don't want a library to be packaged with your JS.
   * For instance, let's say you have a module dependent upon jQuery, but jQuery is
   * a global on the page. Include in here as an external.
   *
   * More info: https://webpack.github.io/docs/library-and-externals.html
   */
  // externals: {
  //   jquery: {
  //     root: '$',
  //     commonjs2: 'jquery',
  //     commonjs: 'jquery',
  //     amd: 'jquery'
  //   },
  //   underscore: {
  //     root: '_',
  //     commonjs2: 'underscore',
  //     commonjs: 'underscore',
  //     amd: 'underscore'
  //   }
  // },

  /**
   * More info on modules: https://webpack.github.io/docs/configuration.html#module
   */
  module: {

    /**
     * Loaders allow you to preprocess files as you require() or “load” them. Loaders
     * are kind of like “tasks” are in other build tools, and provide a powerful way
     * to handle frontend build steps. Loaders can transform files from a different
     * language like, CoffeeScript to JavaScript, or inline images as data URLs.
     *
     * We're using babel-loader (https://github.com/babel/babel-loader), but you
     * can add anything else you'd like (e.g. a react loader if you're using jsx)
     *
     * List of loaders: https://webpack.github.io/docs/list-of-loaders.html
     * More info on loaders: https://webpack.github.io/docs/loaders.html
     */
    loaders: [
      {
        test: /\.js$/,
        loader: ['babel'],
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
