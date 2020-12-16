import { addParameters } from '@storybook/react';

addParameters({
  viewMode: 'story',
  docs: { page: null },
  options: {
    showRoots: true,
    storySort: {
      order: ['Getting Started', 'Pages', ['Home', 'Login', 'Admin'], 'Components'],
    },
  },
  statuses: {
    Stable: '#29A347',
    Development: '#CC8000',
    Deprecated: '#F04B32',
  },
});
