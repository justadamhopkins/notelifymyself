import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'

const app = express()
const config = require('../webpack.config.js')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

compiler.plugin('done', () => {
  Object.keys(require.cache).forEach((id) => {
    if (!/[\/\\]node_modules[\/\\]/.test(id)) {
      delete require.cache[id]
    }
  })
})

app.listen(3000, () => {
  console.log(`App listening on port 3000`)
})
