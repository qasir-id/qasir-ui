// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import ChipComponent from 'components/data-display/Chip';
import ChipDocs from './description.docs.mdx';

import 'font-family.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Wrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default {
  title: 'Components/Data Display/Chip',
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    label: { name: 'Text', control: 'text' },
    variant: {
      name: 'Variant',
      control: {
        type: 'select',
        options: ['default', 'outlined'],
      },
    },
    color: {
      name: 'Color',
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary'],
      },
    },
    disabled: {
      name: 'Disabled',
      control: {
        type: 'boolean',
      },
    },
    size: {
      name: 'Size',
      control: {
        type: 'select',
        options: ['small', 'medium'],
      },
    },
    customFont: {
      name: 'Custom Font Color - hex',
      control: 'color',
    },
    customBackground: {
      name: 'Custom Background Color - hex',
      control: 'color',
    },
  },
};
export const description = ({ label, variant, disabled, color, size, customFont, customBackground }) => (
  <Wrapper>
    <ChipComponent
      label={label}
      variant={variant}
      color={color}
      disabled={disabled}
      size={size}
      customFont={customFont}
      customBackground={customBackground}
    />
  </Wrapper>
);

description.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated
    docs: {
      page: ChipDocs,
    },
  },
};

description.args = {
  label: 'Hello World',
  variant: 'default',
  disabled: false,
  color: 'default',
  size: 'medium',
  customFont: '',
  customBackground: '',
};
