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
  },
  argTypes: {
    Label: { control: 'text' },
    Type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'disable', 'outline', 'text'],
      },
    },
    Size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small'],
      },
    },
    FullWidth: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const description = ({ Label, Type, Size, FullWidth }) => (
  <Wrapper>
    <Button
      variant={
        (Type == 'primary' && 'contained') ||
        (Type == 'secondary' && 'contained') ||
        (Type == 'disable' && 'contained') ||
        (Type == 'outline' && 'outlined') ||
        (Type == 'text' && 'text')
      }
      disabled={Type == 'disable'}
      color={Type == 'primary' ? Type : Type == 'secondary' ? Type : ''}
      size={Size}
      fullWidth={FullWidth}
      onClick={action('onClick')}
      onMouseEnter={action('onMouseEnter')}
      onMouseLeave={action('onMouseLeave')}
    >
      {Label}
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
  Label: 'Hello World',
  Type: 'primary',
  Size: 'medium',
};
