// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import TextFieldTypes from './textfield-types';
import TextFieldTypesDocs from './textfield-types/docs.mdx';

import TextFieldFormProps from './textfield-form-props';
import TextFieldFormPropsDocs from './textfield-form-props/docs.mdx';

import TextFieldValidation from './textfield-validation';
import TextFieldValidationDocs from './textfield-validation/docs.mdx';

import TextFieldMultiline from './textfield-multiline';
import TextFieldMultilineDocs from './textfield-multiline/docs.mdx';

import TextFieldIcons from './textfield-icons';
import TextFieldIconsDocs from './textfield-icons/docs.mdx';

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
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: TextFieldTypesDocs,
    },
  },
};

export const formProps = () => (
  <Wrapper>
    <TextFieldFormProps />
  </Wrapper>
);
formProps.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: TextFieldFormPropsDocs,
    },
  },
};

export const validation = () => (
  <Wrapper>
    <TextFieldValidation />
  </Wrapper>
);
validation.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: TextFieldValidationDocs,
    },
  },
};

export const multiline = () => (
  <Wrapper>
    <TextFieldMultiline />
  </Wrapper>
);
multiline.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: TextFieldMultilineDocs,
    },
  },
};

export const icons = () => (
  <Wrapper>
    <TextFieldIcons />
  </Wrapper>
);
icons.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated
    docs: {
      page: TextFieldIconsDocs,
    },
  },
};
