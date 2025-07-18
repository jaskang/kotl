import { defineConfig } from 'tsdown'

export default defineConfig(options => {
  return {
    entry: 'src/index.ts',
    format: ['esm', 'cjs'],
    noExternal: ['clsx'],
    clean: true,
    dts: true,
  }
})
