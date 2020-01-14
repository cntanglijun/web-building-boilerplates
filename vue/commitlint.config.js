const num = 2

module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'type-enum': [
      num,
      'always',
      [
        'feat',
        'fix',
        'refactor',
        'chore',
        'revert',
        'test',
        'docs'
      ]
    ]
  }
}
