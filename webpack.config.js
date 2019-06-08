const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'development',
  entry: ['webpack-hot-middleware/client', './src/index.js'],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader'
          }
        ]
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourcemaps: true,
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.join(__dirname, '/postcss.config.js')
              }
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|mp4)$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/[path][name].[ext]',
          context: './src/assets'
        }
      }
    ]
  },
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.json', '.jsx']
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new Dotenv({
      path: '.env.dev'
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: path.join(__dirname, '/src/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
}
