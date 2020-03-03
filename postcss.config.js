const getPlugins = () => {
  const plugins = {
    'postcss-import': {},
    autoprefixer: {},
    tailwindcss: {},
    'postcss-preset-env': { stage: 2 }
  }
  return process.env.NODE_ENV === 'production'
    ? {
        ...plugins,
        '@fullhuman/postcss-purgecss': {
          content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
        }
      }
    : plugins
}

module.exports = { plugins: getPlugins() }
