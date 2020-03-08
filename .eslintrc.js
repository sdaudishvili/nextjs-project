module.exports = {
  env: {
    browser: true,
    node: true
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
    'plugin:jsx-a11y/recommended'
  ],
  globals: {
    test: true,
    axios: true,
    STATICURL: true,
    NoSSR: true
  },
  plugins: ['jsx-a11y', 'react-hooks'],
  rules: {
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ],
    'import/no-extraneous-dependencies': [1, { devDependencies: true }],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        wrap: 1
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0
  }
};
