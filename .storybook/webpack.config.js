const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [
          // Loader for webpack to process CSS with PostCSS
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
              /* 
                Enable Source Maps
               */
              sourceMap: true,
              /*
                Set postcss.config.js config path && ctx 
               */
              config: {
                path: './.storybook/',
              },
            },
          },
        ],

        include: path.resolve(__dirname, '../'),
      },
    ],
  },
};
