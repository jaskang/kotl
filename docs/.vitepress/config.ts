import { defineConfigWithTheme } from 'vitepress'

import type { Config as ThemeConfig } from './theme/config'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  title: 'Kotl',
  description: 'Kotl 中午文档',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vue' },
      { icon: 'twitter', link: 'https://twitter.com/vuejs' },
      { icon: 'discord', link: 'https://discord.com/invite/HBherRA' },
    ],

    nav: [
      {
        text: 'Docs',
        activeMatch: `^/(guide|examples)/`,
        items: [
          {
            items: [
              { text: 'Guide', link: '/guide/introduction' },
              { text: 'Installation', link: '/guide/installation' },
            ],
          },
        ],
      },
      {
        text: 'Sponsor',
        link: '/sponsor/',
      },
    ],

    sidebar: {
      '/': [
        {
          text: 'Essentials',
          items: [
            { text: 'Introduction', link: '/is' },
            { text: 'Installation', link: '/random' },
          ],
        },
      ],
    },
    localeLinks: [
      {
        link: 'https://vuejs.org',
        text: 'English',
        repo: 'https://github.com/vuejs/docs',
      },
      {
        link: 'https://ja.vuejs.org',
        text: '日本語',
        repo: 'https://github.com/vuejs-translations/docs-ja',
      },
      {
        link: '/guide/introduction',
        text: 'Help Us Translate!',
        isTranslationsDesc: true,
      },
    ],
  },
})
