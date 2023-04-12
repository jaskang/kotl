import type { Config } from 'tailwindcss'

export default {
  content: ['./docs/**/*.md', './docs/.vitepress/**/*.{js,ts,vue}'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
