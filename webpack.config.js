require('@babel/register');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: '/src/index.jsx',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js',
    publicPath: path.build
  },
  resolve:{
    extensions:['.js','.jsx']
 },
  plugins: [
    new HtmlWebpackPlugin({
        
        favicon: 'src/images/icon.svg',
        templateContent: `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Reddit - Dive into anything</title>
            </head>

            <body>
                <div id="root"></div>
            </body>
        </html>
      `,
    })
  ], 
  module: {
    rules: [
        {
            test: /\.(jpe?g|png|gif|svg)$/i, 
            loader: 'file-loader'
        },
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
