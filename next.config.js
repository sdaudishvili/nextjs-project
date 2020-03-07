const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const path = require('path');

module.exports = withCSS(
  withSass({
    env: {
      baseApiUrl: 'http://localhost:3001/api/'
    },
    webpack: (config, { webpack }) => {
      config.plugins.push(
        new webpack.ProvidePlugin({
          axios: path.resolve(__dirname, 'plugins/axios')
        })
      );
      return config;
    }
  })
);
