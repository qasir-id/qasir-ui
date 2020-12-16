// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import TextField from 'components/inputs/TextField';
import TextFieldDescriptionDocs from './description.docs.mdx';

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
  title: 'Components/Inputs/TextField',
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
  },
};

export const description = () => (
  <Wrapper>
    <TextField label="Hello World" variant="outlined" />
  </Wrapper>
);
description.story = {
  parameters: {
    docs: {
      page: TextFieldDescriptionDocs,
    },
  },
};
