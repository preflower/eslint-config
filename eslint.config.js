import { ted } from './dist/index.js'

// import { ted } from './src/index'

export default ted([
  {
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: [
          './tsconfig.json',
          './tsconfig.build.json'
        ]
      }
    }
  }, {
    ignores: [
      'dist/*',
      'esm/*'
    ]
  }
], {
  typescript: false
})
