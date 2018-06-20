'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
    config.build.assetsSubDirectory :
    config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options, useModules) {
  options = options || {}
  let cssLoader = {};
  // console.log(useModules);


  // cssLoader = {
  //   loader: 'css-loader',
  //   options: {
  //     sourceMap: options.sourceMap,
  //     modules: true,
  //     localIdentName: '[local]--[hash:base64:5]'
  //   }
  // }

  if (useModules) {
    cssLoader = {
      loader: 'css-loader',
      options: {
        sourceMap: options.sourceMap,
        modules: true,
        localIdentName: '[local]-[hash:base64:5]'
      }
    }
  } else {
    cssLoader = {
      loader: 'css-loader',
      options: {
        sourceMap: options.sourceMap,
      }
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // console.log(loader);

    // Extract CSS when that o  ption is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        // fallback: 'vue-style-loader'
      })
    } else {
      return ['style-loader'].concat(loaders)
    }
  }


  let re = {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', {
      indentedSyntax: true
    }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  };
  // console.log(re);
  return re;
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options, true)
  const loaders1 = exports.cssLoaders(options, false)

  for (let extension in loaders) {
    const loader = loaders[extension]
    let reg = new RegExp(`^((?!\\.g).)*\\.` + extension + '$')
    console.log(reg.source);
    output.push({
      test: reg,
      use: loader
    })
  }

  for (let extension1 in loaders1) {
    const loader = loaders1[extension1]
    output.push({
      test: new RegExp(`\\.g\\.` + extension1 + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
