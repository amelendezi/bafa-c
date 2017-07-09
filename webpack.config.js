var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
 
module.exports = {
  entry: { 
    app: './src/index.js',     
    print:'./src/print.js'
  },
  plugins : [      
    new HtmlWebpackPlugin({
      title : 'Output Management'
    }),
    new CleanWebpackPlugin(['dist', 'build'], {
      root: '/full/project/path',
      verbose: true,
      dry: false,
      exclude: ['shared.js']
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  
};