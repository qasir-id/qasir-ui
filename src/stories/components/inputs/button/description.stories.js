// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { action } from '@storybook/addon-actions';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import Button from 'components/inputs/Button';
import ButtonDescriptionDocs from './description.docs.mdx';

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
  title: 'Components/Inputs/Button',
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    label: { name: 'Text', control: 'text' },
    type: {
      name: 'Type',
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'disable', 'outline', 'text'],
      },
    },
    size: {
      name: 'Size',
      control: {
        type: 'select',
        options: ['large', 'medium', 'small'],
      },
    },
    fullWidth: {
      name: 'Full Width',
      control: {
        type: 'boolean',
      },
    },
  },
};

export const description = ({ label, type, size, fullWidth }) => (
  <Wrapper>
    <Button
      variant={
        (type == 'primary' && 'contained') ||
        (type == 'secondary' && 'contained') ||
        (type == 'disable' && 'contained') ||
        (type == 'outline' && 'outlined') ||
        (type == 'text' && 'text')
      }
      disabled={type == 'disable'}
      color={type == 'primary' ? type : type == 'secondary' ? type : ''}
      size={size}
      fullWidth={fullWidth}
      onClick={action('onClick')}
      onMouseEnter={action('onMouseEnter')}
      onMouseLeave={action('onMouseLeave')}
    >
      {label}
    </Button>
  </Wrapper>
);

description.story = {
  parameters: {
    docs: {
      page: ButtonDescriptionDocs,
    },
  },
};

description.args = {
  label: 'Hello World',
  type: 'primary',
  size: 'medium',
};
