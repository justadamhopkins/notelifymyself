const magician = require('postcss-font-magician')

module.exports = {
  plugins: [
    require('postcss-import'),
    require('cssnext'),
    require('postcss-url'),
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 0
    }),
    magician({
      variants: {
        Rubik: {
          300: [],
          400: [],
          500: [],
          700: [],
          900: []
        }
      },
      foundries: ['google']
    })
  ]
}
