import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Working with AI',
  description: 'Build Rock, Paper, Scissors with AI. Agree on the rules, test the result, and review the work.',
  lang: 'en-US',
  base: '/218_spec/',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Start the assignment', link: 'https://github.com/kaw393939/is218-rps-starter#readme' },
      { text: 'Process guide', link: '/practice' },
      { text: 'Help', link: '/setup' }
    ],
    sidebar: [
      { text: 'Rock, Paper, Scissors', items: [
        { text: 'Overview', link: '/' },
        { text: 'README: do the assignment', link: 'https://github.com/kaw393939/is218-rps-starter#readme' },
        { text: 'Process guide', link: '/practice' },
        { text: 'If you get stuck', link: '/setup' }
      ] },
      { text: 'Optional reading', collapsed: true, items: [
        { text: 'Background and reading', link: '/background' },
        { text: 'Keep the work visible', link: '/review/' },
        { text: 'Short spec template', link: '/specs/template' },
        { text: 'Earlier examples', link: '/specs/' },
        { text: 'Maintaining this website', link: '/contributing' }
      ] }
    ],
    search: { provider: 'local' },
    outline: [2, 3],
    editLink: {
      pattern: 'https://github.com/kaw393939/218_spec/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/kaw393939/218_spec' }],
    footer: { message: 'Agree on the rules. Let AI help. Check the result.' }
  }
})
