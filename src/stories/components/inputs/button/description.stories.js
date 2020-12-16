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

export const description = (args) => (
  <Wrapper>
    <Button
      {...args}
      variant={
        (args.Type == 'primary' && 'contained') ||
        (args.Type == 'secondary' && 'contained') ||
        (args.Type == 'disable' && 'contained') ||
        (args.Type == 'outline' && 'outlined') ||
        (args.Type == 'text' && 'text')
      }
      disabled={args.Type == 'disable'}
      color={args.Type == 'primary' ? args.Type : args.Type == 'secondary' ? args.Type : ''}
      size={args.Size}
      fullWidth={args.FullWidth}
      onClick={action('onClick')}
      onMouseEnter={action('onMouseEnter')}
      onMouseLeave={action('onMouseLeave')}
    >
      {args.Label}
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
