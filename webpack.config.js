const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public/scripts');
const APP_DIR = path.resolve(__dirname, 'client/src/App');

const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
  	path: BUILD_DIR,
  	filename: 'bundle.js'
  },
  module: {
  	loaders: [
  	  {
  	  	test: /\.jsx/,
  	  	include: APP_DIR,
  	  	loader: 'babel'
  	  }
  	]
  }
}

module.exports = config;