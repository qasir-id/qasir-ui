// Vendors
import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import ButtonTypes from './button-types';
import ButtonSizes from './button-sizes';

import 'font-family.css';

storiesOf('INPUTS|Button', module)
  .add('Types', () => <ButtonTypes />)
  .add('Sizes', () => <ButtonSizes />);
