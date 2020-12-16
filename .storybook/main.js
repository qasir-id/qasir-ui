module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.{js,jsx}'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    'storybook-addon-designs',
    '@storybook/addon-docs',
    '@storybook/addon-storysource',
    '@etchteam/storybook-addon-status/register',
  ],
};
