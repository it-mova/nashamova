const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './client'),
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'client/out'),
    filename: 'main.bundle.js',
    publicPath: '/assets',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            plugins: [
              'transform-runtime',
              'react-hot-loader/babel',
            ],
            presets: ['es2015', 'stage-0', 'react'],
          },
        }],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: path.resolve(__dirname, './client/out'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
      },
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new CopyWebpackPlugin([
      { from: 'index.html' },
    ]),
  ],
};
