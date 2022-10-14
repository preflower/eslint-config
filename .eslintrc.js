module.exports = {
  extends: [
    './index.js',
    './vue.js',
    './react.js',
    './typescript.js'
  ],
  parserOptions: {
    project: [
      './tsconfig.json'
    ],
    extraFileExtensions: ['.vue']
  }
}
