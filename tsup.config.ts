import { defineConfig } from 'tsup'

export default defineConfig(options => {
  return {
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    target: 'es2018',
    splitting: false, 
    sourcemap: true,
    clean: true,
    minify: false,
    dts: { entry: 'src/index.ts' },
  }
})
