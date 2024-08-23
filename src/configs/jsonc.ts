import { ESLint, Linter } from 'eslint'
import pluginJsonc from 'eslint-plugin-jsonc'
import * as parserJsonc from 'jsonc-eslint-parser'
import { GLOB_JSON, GLOB_JSON5, GLOB_JSONC } from './globs'

export const jsonc: Linter.Config[] = [
  {
    name: 'ted/json',
    files: [GLOB_JSON, GLOB_JSON5, GLOB_JSONC],
    languageOptions: {
      parser: parserJsonc
    },
    plugins: {
      jsonc: pluginJsonc as unknown as ESLint.Plugin
    },
    rules: {
      ...(pluginJsonc.configs['recommended-with-jsonc']
        .rules as Linter.RulesRecord),
      'jsonc/quote-props': 'off',
      'jsonc/quotes': 'off'
    }
  }
]
