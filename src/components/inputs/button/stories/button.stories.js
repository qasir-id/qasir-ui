// Vendors
import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import ButtonTypes from './button-types';

import 'font-family.css';

storiesOf('INPUTS|Button', module).add('Types', () => <ButtonTypes />);
