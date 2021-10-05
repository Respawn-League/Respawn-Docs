const { description } = require('../../package')

module.exports = {
  plugins: ['@vuepress/back-to-top'],
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
    ['meta', { name: 'theme-color', content: '#0091ea' }],
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
          { text: 'Infractions', link: '/league/infractions/' },
          { text: 'Maps', link: '/league/maps/' }
        ]
      },
      {
        text: 'Community',
        ariaLabel: 'Community Menu',
        items: [
          { text: 'Guidelines', link: '/community/guidelines/' },
          { text: 'Anti-Cheat & You', link: '/community/anticheatandyou/' },
          { text: 'Partners', link: '/community/partners/' }
        ]
      },
      {
        text: 'Guides',
        ariaLabel: 'Guides Menu',
        items: [
          { text: 'Beginners Guide', link: '/guides/beginners-guide/' },
          { text: 'Patreon', link: '/guides/patreon/' },
          { text: 'Mumble Servers', link: '/guides/mumble-servers/' },
          { text: 'Server Guides', link: '/guides/server-guides/' }
        ]
      },
      {
        text: 'League Website',
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
      '/league/maps/': [
        {
          title: 'Map History',
          collapsable: false,
          children: [
            '',
            'highlander',
            '4v4',
            'bball',
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
      '/guides/server-guides/': [
        {
          title: 'Server Guides',
          collapsable: false,
          children: [
            '',
            'using-bookable-server',
            'configs',
            'basic-server-setup',
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
