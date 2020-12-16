module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.{js,jsx}'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links/register',
    '@storybook/addon-docs',
    '@storybook/addon-storysource',
    '@etchteam/storybook-addon-status/register',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-controls',
    'storybook-addon-designs',
    'storybook-addon-performance/register',
  ],
};
