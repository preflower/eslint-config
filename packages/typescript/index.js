module.exports = {
  extends: [
    '@preflower/eslint-config-basic',
    'standard-with-typescript'
  ],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
}
