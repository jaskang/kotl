import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        formats: ['es', 'cjs'],
      },
      emptyOutDir: true,
    },
  }
})
