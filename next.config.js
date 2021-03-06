/* eslint-disable no-param-reassign */
const path = require('path');

module.exports = {
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
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    });
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      });
    }
    return config;
  }
};
