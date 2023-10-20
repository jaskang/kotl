import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mdx from '@mdx-js/rollup'

export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    plugins: [
      {enforce: 'pre', ...mdx()},
      react()
    ],
  }
})
