// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

import CheckboxBasic from './checkbox-basic';
import CheckboxBasicDocs from './checkbox-basic/docs.mdx';

import CheckboxProps from './checkbox-props/';
import CheckboxPropsDocs from './checkbox-props/docs.mdx';

import CheckboxWithForm from './checkbox-form';
import CheckboxWithFormDocs from './checkbox-form/docs.mdx';

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
  title: 'Components/Inputs/Checkbox/Example',
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};

export const basic = () => (
  <Wrapper>
    <CheckboxBasic />
  </Wrapper>
);

basic.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated,
    docs: {
      page: CheckboxBasicDocs,
    },
  },
};

export const props = () => (
  <Wrapper>
    <CheckboxProps />
  </Wrapper>
);

props.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated,
    docs: {
      page: CheckboxPropsDocs,
    },
  },
};

export const withForm = () => (
  <Wrapper>
    <CheckboxWithForm />
  </Wrapper>
);

withForm.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated,
    docs: {
      page: CheckboxWithFormDocs,
    },
  },
};
