module.exports = {
  extends: [
    '@preflower/eslint-config-basic',
    'standard-with-typescript'
  ],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/strict-boolean-expressions': ['error', { allowAny: true }],
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }]
  }
}
