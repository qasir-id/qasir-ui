import { create } from '@storybook/theming/create';
import colors from './src/components/variables/colors';

export default create({
  base: 'light',

  // Colours
  // colorPrimary: colors.red50,
  // colorSecondary: colors.grey50,

  // UI
  // appBg: 'white',
  // appContentBg: 'silver',
  // appBorderColor: 'grey',
  // appBorderRadius: 4,

  // Typography
  fontBase: '"Montserrat", sans-serif',
  fontCode: 'monospace',

  // Text colors
  // textColor: '#031c2d',
  // headerCommon: { color: 'red' },

  // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'hotpink',

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: 'Qasir',
  brandUrl: 'https://www.qasir.id',
  brandImage: 'https://www.qasir.id/images/revamp-new-img/red.svg',
});
