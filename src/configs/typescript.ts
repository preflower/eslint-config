import { Linter } from 'eslint'
import { GLOB_TS, GLOB_TSX } from './globs'
import tseslint from 'typescript-eslint'

export function typescript () {
  return [
    ...tseslint.config({
      extends: [
        ...tseslint.configs.recommended,
        ...tseslint.configs.stylistic
      ],
      name: 'ted/typescript',
      files: [GLOB_TS, GLOB_TSX],
      languageOptions: {
        parserOptions: {
          project: true,
          projectService: true
        }
      },
      rules: {
        /* ----------- Override recommended rules --------- */
        /**
         * 允许使用 // @ts-ignore // @ts-nocheck // @ts-expect-error
         * @reason 这种注释本身就是对特殊代码的说明
         */
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-expect-error': 'allow-with-description',
            'ts-ignore': true,
            'ts-nocheck': true,
            'ts-check': false,
            minimumDescriptionLength: 3
          }
        ],
        /**
         * 禁止对没有 then 方法的对象使用 await
         */
        '@typescript-eslint/await-thenable': 'off',
        /**
         * 避免错误的使用 Promise
         * @reason 有些场景需要允许有返回值的情况下使用void
         */
        '@typescript-eslint/no-misused-promises': [
          'error', { checksVoidReturn: false }
        ],
        /**
         * 禁止明确指定 any 类型
         * @reason 某些Rest参数的场景下需要为任意类型, 例如定义AnyFunction
         */
        '@typescript-eslint/no-explicit-any': [
          'error', { ignoreRestArgs: true }
        ],
        /* ----------- End: Override recommended rules --------- */
        /* ----------- Override stylistic rules --------- */
        /**
         * 类型断言必须使用 as Type，禁止使用 <Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）
         * @reason <Type> 容易被理解为 jsx
         */
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never'
          }
        ],
        /**
         * 限制数组类型必须使用 Array<T> 或 T[]
         * @reason 允许灵活运用两者
         */
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        /**
         * 优先使用 interface 而不是 type
         * @reason interface 可以 implement, extend 和 merge
         */
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        /**
         * 使用 RegExp#exec 而不是 String#match
         */
        '@typescript-eslint/prefer-regexp-exec': 'off',
        /**
         * 使用 ?? 替代 ||
         * @reason 除了条件校验的场景, ??往往更符合开发者本意
         */
        '@typescript-eslint/prefer-nullish-coalescing': ['error', {
          ignoreConditionalTests: true
        }],
        /* ----------- End: Override stylistic rules --------- */
        /**
         * 条件判断需要严格检查
         */
        '@typescript-eslint/strict-boolean-expressions': ['error', {
          /**
           * 允许自动判断 Nullish 和 Boolean 值
           */
          allowNullableBoolean: true,
          /**
           * 允许自动判断 Nullish 和 Object 值
           */
          allowNullableObject: true
        }],
        /* ----------- Override JS ----------- */
        /**
         * 关闭 js no-undef 规则
         * @reason TS 自带该校验
         */
        'no-undef': 'off'
      }
    })
  ] as Linter.Config[]
}
