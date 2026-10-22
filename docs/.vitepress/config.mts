import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'IS218 Program Specs',
  description: 'A shared workspace for writing, discussing, and reviewing program specifications.',
  lang: 'en-US',
  base: '/218_spec/',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Specifications', link: '/specs/' },
      { text: 'Review guide', link: '/review/' },
      { text: 'GitHub', link: 'https://github.com/kaw393939/218_spec' }
    ],
    sidebar: [
      { text: 'Workspace', items: [
        { text: 'Overview', link: '/' },
        { text: 'Specification directory', link: '/specs/' }
      ] },
      { text: 'Write & review', items: [
        { text: 'Review process', link: '/review/' },
        { text: 'Specification template', link: '/specs/template' }
      ] }
    ],
    search: { provider: 'local' },
    outline: [2, 3],
    editLink: {
      pattern: 'https://github.com/kaw393939/218_spec/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/kaw393939/218_spec' }],
    footer: { message: 'IS218 · Specifications first. Review together. Build with clarity.' }
  }
})
