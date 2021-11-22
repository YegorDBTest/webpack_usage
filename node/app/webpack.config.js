const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


// module.exports = {
//   mode: 'development',
//   entry: {
//     index: './src/index.js',
//     print: './src/print.js',
//   },
//   devtool: 'inline-source-map',
//   devServer: {
//     static: './dist',
//     host: '0.0.0.0',
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'Development',
//     }),
//   ],
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true,
//     publicPath: '/',
//   },
// };


module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    another: './src/another-module.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
