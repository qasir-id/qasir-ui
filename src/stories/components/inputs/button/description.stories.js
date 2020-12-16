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
    backgroundColor: { control: 'color' },
  },
};

export const description = () => (
  <Wrapper>
    <Button
      variant="contained"
      color="primary"
      onClick={action('onClick')}
      onMouseEnter={action('onMouseEnter')}
      onMouseLeave={action('onMouseLeave')}
    >
      Hello World
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
