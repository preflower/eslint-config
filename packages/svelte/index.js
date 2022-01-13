module.exports = {
  extends: [
    '@preflower/eslint-config-typescript'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 2, maxEOF: 0 }]
      }
    }
  ],
  plugins: [
    'svelte3'
  ],
  settings: {
    'svelte3/typescript': true
  }
}
