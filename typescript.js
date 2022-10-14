module.exports = {
  extends: [
    'standard-with-typescript'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      rules: {
        // TS
        '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
        '@typescript-eslint/strict-boolean-expressions': ['error', {
          /**
           * 允许 Nullish 和 Boolean 值在表达式中
           */
          allowNullableBoolean: true
        }],
        // Override JS
        indent: 'off',
        '@typescript-eslint/indent': ['error', 2],
        // Off
        /**
         * 允许使用 非空断言
         * @reason 使用 非空断言 时就已经清楚了风险
         */
        '@typescript-eslint/no-non-null-assertion': 'off',
        /**
         * 函数返回值必须与声明的类型一致
         * @reason 返回值类型可以推导出来
         */
        '@typescript-eslint/explicit-function-return-type': 'off'
      }
    }
  ]
}
