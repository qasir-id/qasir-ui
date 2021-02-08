// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

import CheckboxBasic from './checkbox-basic';
import CheckboxBasicDocs from './checkbox-basic/docs.mdx';

import CheckboxProps from './checkbox-props/';
import CheckboxPropsDocs from './checkbox-props/docs.mdx';

import CheckboxWithFormGroup from './checkbox-form-group';
import CheckboxWithFormGroupDocs from './checkbox-form-group/docs.mdx';

import CheckboxLabelPlacement from './checkbox-label-placement';
import CheckboxLabelPlacementDocs from './checkbox-label-placement/docs.mdx';

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
    status: 'Stable', // Stable | Development | Deprecated,
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
    status: 'Stable', // Stable | Development | Deprecated,
    docs: {
      page: CheckboxPropsDocs,
    },
  },
};

export const withFormGroup = () => (
  <Wrapper>
    <CheckboxWithFormGroup />
  </Wrapper>
);

withFormGroup.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated,
    docs: {
      page: CheckboxWithFormGroupDocs,
    },
  },
};

export const labelPlacement = () => (
  <Wrapper>
    <CheckboxLabelPlacement />
  </Wrapper>
);

labelPlacement.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated,
    docs: {
      page: CheckboxLabelPlacementDocs,
    },
  },
};
