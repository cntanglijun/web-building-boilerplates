module.exports = {
  extends: [
    'eslint:recommended'
  ],
  parser: 'babel-eslint',
  env: {
    node: true,
    mocha: true,
    browser: true
  },
  rules: {
    'accessor-pairs': [ 'error' ],
    'array-callback-return': [ 'error' ],
    'block-scoped-var': [ 'error' ],
    'brace-style': [ 'error', '1tbs' ],
    'consistent-return': [ 'error' ],
    'curly': [ 'error' ],
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'no-alert': [ 'error' ],
    'no-div-regex': [ 'error' ],
    'no-else-return': [ 'error' ],
    'no-empty-function': [ 'error' ],
    'no-eq-null': [ 'error' ],
    'no-eval': [ 'error' ],
    'no-extend-native': [ 'error' ],
    'no-floating-decimal': [ 'error' ],
    'no-with': [ 'error' ],
    'semi': [ 'off' ]
  }
}
