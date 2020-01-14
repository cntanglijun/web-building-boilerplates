// https://eslint.org/docs/user-guide/configuring

module.exports = {
  plugins: [
    "react"
  ],
  extends: [
    'plugin:react/recommended'
  ],
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  rules: {
    'react/jsx-curly-spacing': [ 'error', 'always' ],
    'react/prefer-es6-class': [ 'error', 'always' ]
  }
}
