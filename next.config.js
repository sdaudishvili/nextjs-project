const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

module.exports = withCSS(
  withSass({
    env: {
      baseApiUrl: 'http://localhost:3001/api/'
    }
  })
)
