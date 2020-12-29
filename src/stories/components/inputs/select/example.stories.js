// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import SelectTypes from './select-types';
import SelectTypesDocs from './select-types/docs.mdx';

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
  title: 'Components/Inputs/Select/Example',
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
  },
};
export const types = () => (
  <Wrapper>
    <SelectTypes />
  </Wrapper>
);

types.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated
    docs: {
      page: SelectTypesDocs,
    },
  },
};
