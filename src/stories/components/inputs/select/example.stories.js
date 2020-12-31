// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import SelectTypes from './select-types';
import SelectTypesDocs from './select-types/docs.mdx';

import SelectFormProps from './select-form-props';
import SelectFormPropsDocs from './select-form-props/docs.mdx';

import SelectMultiple from './select-multiple';
import SelectMultipleDocs from './select-multiple/docs.mdx';

import SelectGrouping from './select-grouping';
import SelectGroupingDocs from './select-grouping/docs.mdx';

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

export const formProps = () => (
  <Wrapper>
    <SelectFormProps />
  </Wrapper>
);
formProps.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated
    docs: {
      page: SelectFormPropsDocs,
    },
  },
};

export const multiple = () => (
  <Wrapper>
    <SelectMultiple />
  </Wrapper>
);
multiple.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated
    docs: {
      page: SelectMultipleDocs,
    },
  },
};

export const grouping = () => (
  <Wrapper>
    <SelectGrouping />
  </Wrapper>
);
grouping.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated
    docs: {
      page: SelectGroupingDocs,
    },
  },
};
