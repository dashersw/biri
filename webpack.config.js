const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'biri.min.js',
    sourceMapFilename: 'biri.min.map',
    path: path.resolve(__dirname, 'dist'),
    library: 'biri',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', {
              targets: {
                chrome: '44',
              },
              modules: 'amd'
            }]],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      }
    ]
  }
};
