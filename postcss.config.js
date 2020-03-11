const purgecss = {
    '@fullhuman/postcss-purgecss': {
        content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || []
    }
};

module.exports = {
    plugins: {
        'postcss-import': {},
        autoprefixer: {},
        tailwindcss: {},
        'postcss-preset-env': { stage: 2 },
        ...(process.env.NODE_ENV === `production` ? purgecss : {})
    }
};
