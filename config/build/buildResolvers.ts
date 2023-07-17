import { type ResolveOptions } from 'webpack'
import { type BuildOptions } from './types/config'

export function buildResolvers (option: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [option.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}
