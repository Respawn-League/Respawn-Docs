const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Respawn Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#699ff5' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'League',
        ariaLabel: 'League Menu',
        items: [
          {
            text: 'Competitive Ruleset', link: '/league/competitive-ruleset/'
          }
        ]
      },
      {
        text: 'Community',
        ariaLabel: 'Community Menu',
        items: [
          {
            text: 'Guidelines', link: '/community/guidelines/'
          }
        ]
      },
      {
        text: 'Guides',
        ariaLabel: 'Guides Menu',
        items: [
          {
            text: 'Beginners Guide', link: '/guides/beginners-guide/',
            text: 'Mumble Servers', link: '/guides/mumble-servers/'
          }
        ]
      }
    ],
    sidebar: {
      '/guides/': [
        {
          title: 'Guides',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
