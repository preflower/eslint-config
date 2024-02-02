module.exports = {
  env: {
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended'
  ],
  parser: 'vue-eslint-parser',
  rules: {
    /**
     * 组件名称使用时kebab-case形式
     * @reason 统一团队组件使用方式
     */
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case', {
        registeredComponentsOnly: false
      }
    ],
    /**
     * 组件以Options引入时PascalCase形式, 适应目前社区主流的PascalCase命名风格
     * @reason 统一团队组件使用方式
     */
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    /**
     * 组件命名必须以PascalCase形式
     * @reason 统一团队组件使用方式
     */
    'vue/component-definition-name-casing': [
      'error', 'PascalCase'
    ],
    /**
     * 事件名称必须以camelCase形式
     * @reason 遵循JavaScript的约定，camelCase更加自然
     */
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    // Off
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/multi-word-component-names': 'off',
    // Off conflict rules
    'func-call-spacing': 'off'
  }
}
