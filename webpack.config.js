require('@babel/register');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: '/src/index.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  resolve:{
    extensions:['.js','.jsx']
 },
  plugins: [
    new HtmlWebpackPlugin()
  ], 
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults" 
              }],
              '@babel/preset-react'
            ]
          }
        }]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
}
