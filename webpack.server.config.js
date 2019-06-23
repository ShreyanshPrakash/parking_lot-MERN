const path = require('path')
const webpack = require('webpack')
// const nodeExternals = require('webpack-node-externals')

module.exports = {
  watch : true,
  mode: 'production',
  entry: './server.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  target: 'node',
  node: {
    // Need this when working with express, otherwise the build fails
    __dirname: false,   // if you don't put this is, __dirname
    __filename: false,  // and __filename return blank or /
  },
//   externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
            loader: "babel-loader",
            // more options in the optional jshint object
            options: {  // ⬅ formally jshint property
              // camelcase: true,
              // emitErrors: false,
              // failOnHint: false
              presets: ['@babel/preset-env']
            }
          }]
      }
    ]
  }
}