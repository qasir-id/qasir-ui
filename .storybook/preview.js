import { addParameters, addDecorator } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';

addParameters({
  options: {
    showRoots: true,
  },
  statuses: {
    Stable: '#29A347',
    Development: '#CC8000',
    Deprecated: '#F04B32',
  },
});

addDecorator(withPerformance);

// or global addParameters
export const parameters = {
  layout: 'padded',
  previewTabs: {
    'storybook/docs/panel': {
      index: 1,
      title: 'Documentation',
    },
    canvas: { title: 'Code', hidden: false },
  },
  options: {
    storySort: {
      order: ['Getting Started', 'Documentation', 'Components'],
    },
  },
};
