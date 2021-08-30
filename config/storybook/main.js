const path = require('path')

module.exports = {
  stories: [
    '../../src/components/**/*.stories.mdx',
    '../../src/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.stories\.jsx?$/],
          include: [path.resolve(__dirname, 'src/components')] // You can specify directories
        },
        loaderOptions: {
          prettierConfig: {
            printWidth: 80,
            singleQuote: false
          }
        }
      }
    }
  ]
}
