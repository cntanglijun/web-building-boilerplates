// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  globals: {
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'accessor-pairs': [ 'error' ],
    'array-callback-return': [ 'error' ],
    'block-scoped-var': [ 'error' ],
    'consistent-return': [ 'error' ],
    'curly': [ 'error' ],
    'no-alert': [ 'error' ],
    'no-div-regex': [ 'error' ],
    'no-else-return': [ 'error' ],
    'no-empty-function': [ 'error' ],
    'no-eq-null': [ 'error' ],
    'no-eval': [ 'error' ],
    'no-extend-native': [ 'error' ],
    'no-floating-decimal': [ 'error' ],
    'no-with': [ 'error' ]
  }
}
