module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false
      }
    ]
  ],

  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-runtime'
  ]
}
