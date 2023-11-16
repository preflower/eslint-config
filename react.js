module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    /**
     * 类型相关的约束交给 TypeScript
     */
    'react/prop-types': 'off',
    /**
     * JSX元素单行时最多3个属性, 超出换行, 多行时最多一个属性
     */
    'react/jsx-max-props-per-line': ['error', {
      maximum: {
        single: 3,
        multi: 1
      }
    }],
    /**
     * 当出现多行时确保第一个属性也换行
     */
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    /**
     * 强制JSX多行元素的结束括号与标签对其
     */
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    /**
     * 使用括号包裹多行 JSX 并且要求其换行
     */
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    }]
  }
}
