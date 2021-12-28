module.exports = {
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    '@preflower/eslint-config-typescript'
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  rules: {
    'vue/no-use-v-if-with-v-for': 'off'
  }
}
