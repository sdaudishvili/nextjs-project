module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true
  },
  globals: {
    React: true,
    axios: true,
    NoSSR: true,
    PropTypes: true
  },
  rules: {
    'no-unused-vars': ['error'],
    'jsx-a11y/href-no-hash': ['off'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'import/no-unresolved': ['off'],
    'no-shadow': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/forbid-prop-types': ['off'],
    'react/no-unescaped-entities': ['off'],
    'import/prefer-default-export': ['off'],
    'import/export': ['off'],
    'no-return-assign': ['off'],
    'no-console': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'global-require': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'],

    'import/extensions': ['off'],
    'import/named': ['off'],

    'max-len': [
      'warn',
      {
        code: 120,
        tabWidth: 2,
        comments: 120,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true
      }
    ]
  }
};
