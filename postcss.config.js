module.exports = {
  plugins: [
    require('postcss-import'),
    require('cssnext'),
    require('postcss-url'),
    require('postcss-fontpath'),
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 0
    })
  ]
}
