// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import TextFieldTypes from './textfield-types';
import TextFieldTypesDocs from './textfield-types/docs.mdx';

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
  title: 'Components/Inputs/TextField/Example',
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
  },
};

export const types = () => (
  <Wrapper>
    <TextFieldTypes />
  </Wrapper>
);
types.story = {
  parameters: {
    docs: {
      page: TextFieldTypesDocs,
    },
  },
};
