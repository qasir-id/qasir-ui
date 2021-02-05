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
      order: [
        'Getting Started',
        [
          'Intro',
          'Installing Qasir-UI',
          'Using Qasir-UI',
          'Design Concepts',
          'Platforms Support',
          `What's New`,
          'Support and Feedback',
          'Credits',
        ],
        'Documentation',
        [
          'Guidelines',
          ['Recommended Libraries', 'Design Resources', 'Page Speed'],
          'Core',
          ['Layout', 'Navigation', 'Colours', 'Typography', 'Communication'],
        ],
        'Components',
        [
          'Layout',
          ['Box', 'Container', 'Grid', 'Hidden'],

          'Inputs',
          ['Button', 'Checkbox', 'Datetime', 'Radio', 'Select', 'Slider', 'Switch', 'TextField'],

          'Navigation',
          ['Bottom Navigation', 'Breadcrumbs', 'Drawer', 'Menu', 'Stepper', 'Tabs'],

          'Surfaces',
          ['Accordion', 'Card', 'Paper'],

          'Feedback',
          ['Backdrop', 'Dialog', 'Progress', 'Snackbar'],

          'Data Display',
          [
            'Avatar',
            'Badge',
            'Chip',
            'Empty State',
            'Error',
            'Icons',
            'List',
            'Table',
            'Tooltip',
            'Typography',
          ],

          'Utils',
          ['No SSR', 'Popover'],

          'Lab',
          ['Alert', 'Autocomplete', 'Skeleton', 'Pagination'],
        ],
        'Templates',
        ['Login', 'Emails Template', 'Errors Page', 'Under Construction'],
      ],
    },
  },
};
