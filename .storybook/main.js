module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-jest',
    'storybook-addon-psuedo-states',
    'storybook-addon-next'
  ],
  framework: '@storybook/react',
  core: {
    'builder': '@storybook/builder-webpack5'
  },
  typescript: { reactDocgen: false }
}