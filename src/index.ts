import { Linter } from 'eslint'
import {
  javascript,
  jsonc,
  sortPackageJson,
  sortTsconfig,
  typescript,
  vue,
  react
} from './configs'

/**
 * Ted's preset configs
 * @param config
 * @param features
 * @returns
 */
export function ted (
  config: Linter.Config | Linter.Config[] = [],
  {
    typescript: enableTypescript = true,
    vue: enableVue = true,
    react: enableReact = false
  }: Partial<{
    /** Typescript support. Auto-enable. */
    typescript: boolean
    /** Vue support. Auto-enable. */
    vue: boolean
    /** React support. Default: false */
    react: boolean
  }> = {}
): Linter.Config[] {
  const configs = [...javascript, ...jsonc, ...sortPackageJson, ...sortTsconfig]
  if (Object.keys(config).length > 0) {
    configs.push(...(Array.isArray(config) ? config : [config]))
  }
  if (enableTypescript) {
    configs.push(...typescript())
  }
  if (enableVue) {
    configs.push(...vue({ typescript: enableTypescript }))
  }
  if (enableReact) {
    configs.push(...react())
  }
  return configs
}
