import { OptionsHasTypeScript } from '../types'
import pluginVue from 'eslint-plugin-vue'
import parserVue from 'vue-eslint-parser'
import { GLOB_VUE } from './globs'
import { Linter } from 'eslint'
import { typescriptCore } from './typescript'
import tseslint from 'typescript-eslint'

export function vue (
  options: OptionsHasTypeScript
) {
  const vueTs = options.typescript
    ? typescriptCore
      .filter((config) => config.name !== 'typescript-eslint/base')
      .map((config) => {
        return {
          ...config,
          files: [GLOB_VUE],
          name: `ted/vue/${config.name?.replace('ted/', '') ?? 'anonymous'}`
        }
      })
    : []

  return [
    ...vueTs,
    {
      name: 'ted/vue/auto-imports',
      // This allows Vue plugin to work with auto imports
      // https://github.com/vuejs/eslint-plugin-vue/pull/2422
      languageOptions: {
        globals: {
          computed: 'readonly',
          defineEmits: 'readonly',
          defineExpose: 'readonly',
          defineProps: 'readonly',
          onMounted: 'readonly',
          onUnmounted: 'readonly',
          reactive: 'readonly',
          ref: 'readonly',
          shallowReactive: 'readonly',
          shallowRef: 'readonly',
          toRef: 'readonly',
          toRefs: 'readonly',
          watch: 'readonly',
          watchEffect: 'readonly'
        }
      },
      plugins: {
        vue: pluginVue
      }
    },
    {
      name: 'ted/vue',
      files: [GLOB_VUE],
      languageOptions: {
        parser: parserVue,
        parserOptions: {
          ecmaFeatures: {
            jsx: true
          },
          extraFileExtensions: ['.vue'],
          parser: options.typescript
            ? '@typescript-eslint/parser'
            : null,
          sourceType: 'module'
        }
      },
      plugins: {
        '@typescript-eslint': tseslint.plugin,
        vue: pluginVue
      },
      rules: {
        ...pluginVue.configs['vue3-strongly-recommended'].rules,
        /**
         * 组件名称使用时PascalCase形式
         * @reason 统一团队组件使用方式
         */
        'vue/component-name-in-template-casing': [
          'error',
          'PascalCase', {
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
        /**
         * 允许同时使用 v-if 和 v-for 在一起
         * @reason v-if 和 v-for 并用优先级是基础逻辑, 不需要强制分开
         */
        'vue/no-use-v-if-with-v-for': 'off',
        /**
         * 组件名不要求强制使用多个单词
         */
        'vue/multi-word-component-names': 'off',
        /**
         * Off conflict rules
         */
        'func-call-spacing': 'off'
      }
    }
  ] as Linter.Config[]
}
