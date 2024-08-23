// import { ted } from './dist/index'

import { ted } from './src/index'

export default ted([
  {
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: [
          './tsconfig.json',
          './tsconfig.node.json'
        ]
      }
    }
  }, {
    ignores: [
      'dist/*',
      'esm/*'
    ]
  }
])
