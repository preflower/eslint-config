module.exports = {
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    '@preflower/eslint-config-typescript'
  ],
  env: {
    'vue/setup-compiler-macros': true
  },
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      },
      rules: {
        // Off Conflict rules
        'react-hooks/rules-of-hooks': 'off'
      }
    }
  ],
  rules: {
    // Off
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
