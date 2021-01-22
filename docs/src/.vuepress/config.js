const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Respawn League Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Documentation for Respawn League services.',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
  	['link', { rel: 'icon', href: '/public/logo.png' }],
    ['meta', { name: 'theme-color', content: '#dc3048' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/Respawn-League/Respawn-Docs',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    displayAllHeaders: true, // Default: false
    lastUpdated: true,
    nav: [
      {
        text: 'League',
        ariaLabel: 'League Menu',
        items: [
          { text: 'Competitive Ruleset', link: '/league/rules/' },
          { text: 'Infractions', link: '/league/infractions/' }
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
          { text: 'Beginners Guide', link: '/guides/beginners-guide/' },
          { text: 'Patreon', link: '/guides/patreon/' },
          { text: 'Mumble Servers', link: '/guides/mumble-servers/' }
        ]
      },
      {
        text: 'Website',
        link: 'https://rsl.tf/',
      }
    ],
    sidebar: {
      '/league/rules/': [
        {
          title: 'Competitive Ruleset',
          collapsable: false,
          children: [
            '',
            'season-structure',
            'out-of-region',
            'match-structure',
            'timezones',
            'match-negotiations',
            'mediation-process',
            'team-responsibilities',
            'gamemodes',
            'class-restrictions',
            'whitelist',
            'server-config',
            'pausing',
            'pov-demo-recording',
            'map-selection',
            'mercenaries',
            'rosters-and-transfers',
            'disputes',
            'scoring',
            'tiebreaker',
            'submitting-scores',
            'forfeits',
            'exploits',
            'cheating',
            'captaincy',
            'server-usage',
            'sportsmanship',
            'account-usage',
            'associated-punishments',
            'miscellaneous',
          ]
        },
      ],
      '/league/infractions/': [
        {
          title: 'Infractions',
          collapsable: false,
          children: [
            '',
            'infractions-and-offences',
            'cheating-bans',
          ]
        },
      ],
      '/guides/mumble-servers/': [
        {
          title: 'Mumble Servers',
          collapsable: false,
          children: [
            '',
            'requesting-a-mumble',
            'basic-setup',
            'channels-and-custom-groups',
          ]
        },
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
