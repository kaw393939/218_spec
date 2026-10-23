import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Working with AI',
  description: 'A short guided exercise in working with AI using Markdown specs, GitHub issues, and small changes.',
  lang: 'en-US',
  base: '/218_spec/',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Start here', link: '/start' },
      { text: 'Worked example', link: '/example' },
      { text: 'Background', link: '/background' },
      { text: 'GitHub', link: 'https://github.com/kaw393939/218_spec' }
    ],
    sidebar: [
      { text: 'Practice', items: [
        { text: 'Start here', link: '/start' },
        { text: 'Worked example', link: '/example' },
        { text: 'Keep the work visible', link: '/review/' }
      ] },
      { text: 'Reference', items: [
        { text: 'Background and reading', link: '/background' },
        { text: 'Short spec template', link: '/specs/template' },
        { text: 'Personal link library', link: '/specs/link-library' },
        { text: 'Project specs', link: '/specs/' }
      ] }
    ],
    search: { provider: 'local' },
    outline: [2, 3],
    editLink: {
      pattern: 'https://github.com/kaw393939/218_spec/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/kaw393939/218_spec' }],
    footer: { message: 'Describe. Build. Check. · Practice working with AI.' }
  }
})
