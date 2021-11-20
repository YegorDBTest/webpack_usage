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
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    another: {
      import: './src/another-module.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
  },
  output: {
    filename: 'main.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    // If we're going to use multiple entry points on a single HTML page,
    // optimization.runtimeChunk: 'single' is needed,
    // otherwise we could get into trouble.
    // https://bundlers.tooling.report/code-splitting/multi-entry/
    runtimeChunk: 'single',
  },
};
