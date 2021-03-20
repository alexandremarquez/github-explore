const path = require('path')
const hmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development': 'production',
  entry: path.resolve(__dirname,'src','index.js'),
  devtool: isDevelopment ? 'eval-source-map': 'source-map',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js','jsx']
  },
  devServer:{
    contentBase: path.resolve(__dirname,'public'),
  },
  plugins:[ 
    new hmlWebpackPlugin({
      template: path.resolve(__dirname, 'public','index.html')
    })
  ],
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      /*{
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader'],
      }, */
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ],
  }
}