const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/core/template.html',
  filename: './index.html'
})

module.exports = {
  externals: {
    'react/addons': true,
 },
  entry: ['@babel/polyfill', './src/App.js'],
  module: {
    rules: [
     
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jpg|png|gif|svg|pdf|ico|woff|eot|woff2|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name]-[hash:8].[ext]'
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [htmlPlugin]
}
