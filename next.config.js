const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const path = require('path');

module.exports = withFonts(
  withCSS(
    withSass({
      env: {
        baseApiUrl: 'http://localhost:3001/api/'
      },
      enableSvg: true,
      webpack: (config, { webpack }) => {
        config.plugins.push(
          new webpack.ProvidePlugin({
            axios: path.resolve(__dirname, 'plugins/axios'),
            NoSSR: [path.resolve(__dirname, 'plugins/NoSSR'), 'default']
          })
        );
        return config;
      }
    })
  )
);
