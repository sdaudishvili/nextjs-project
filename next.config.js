const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const path = require('path');

module.exports = withCSS(
  withSass({
    env: {
      baseApiUrl: 'http://localhost:3001/api/',
      staticUrl: 'http://localhost:3001/images/'
    },
    enableSvg: true,
    webpack: (config, { webpack, dev }) => {
      config.resolve.alias['@'] = path.join(__dirname, '');
      config.plugins.push(
        new webpack.ProvidePlugin({
          axios: [path.resolve(__dirname, 'plugins/axios'), 'default']
        })
      );
      if (dev) {
        config.module.rules.push({
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        });
      }
      config.module.rules.push({
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
              svgo: {
                plugins: [{ removeTitle: false }],
                floatPrecision: 2
              }
            }
          }
        ]
      });
      return config;
    }
  })
);
