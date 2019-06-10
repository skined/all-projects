let path = require('path')
let HtmlWebpcakPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
//reslove函数用来返回一个绝对路径
let resolve = file => {
  return path.resolve(__dirname, file)
}

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist')
  },
  devServer: {
    before(app) {
      app.get('/user', (req, res) => {
        res.json({ name: 'leilei' })
      })
    },
    port: 3005,
    contentBase: './dist',
    compress: true,
    open: true,
    proxy: {}
  },

  plugins: [
    new HtmlWebpcakPlugin({
      template: './src/index.html',
      filename: 'index.html',
      hash: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'], //presets 预设
              plugins: [
                ['@babel/plugin-proposal-class-properties', { loose: true }]
              ] //编译的时候使用的插件
            }
          }
        ],
        include: resolve('src'),
        exclude: /node_modules/
      }
      // {
      //   enforce: "pre",
      //   test: /\.js$/,
      //   use: "eslint-loader"
      // },
    ]
  }
}
