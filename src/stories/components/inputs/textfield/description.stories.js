// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { action } from '@storybook/addon-actions';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';

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
  argTypes: {
    defaultValue: { name: 'Default Value', control: 'text' },
    label: { name: 'Label', control: 'text' },
    formProps: {
      name: 'Form Props',
      control: {
        type: 'select',
        options: ['text', 'required', 'disabled', 'password', 'read only', 'number', 'search'],
      },
    },
    inputIcons: {
      name: 'Input Icons',
      control: {
        type: 'select',
        options: ['start', 'end'],
      },
    },
    error: {
      name: 'Error State',
      control: {
        type: 'boolean',
      },
    },
    multilineRows: { name: 'Multiline Rows', control: 'range', min: 1, max: 10, step: 1 },
  },
};

export const description = ({ defaultValue, label, formProps, error, multilineRows, inputIcons }) => {
  const handleType = (formProps) => {
    switch (formProps) {
      case 'text':
        return formProps;
      case 'password':
        return formProps;
      case 'number':
        return formProps;
      case 'search':
        return formProps;
    }
  };
  return (
    <Wrapper>
      <TextField
        value={defaultValue}
        type={handleType(formProps)}
        required={formProps == 'required'}
        label={formProps != 'disabled' ? label : ''}
        variant="outlined"
        onFocus={action('onFocus')}
        onBlur={action('onBlur')}
        disabled={formProps == 'disabled'}
        labelWidth={formProps == 'disabled' && 0}
        error={error}
        multiline
        rows={multilineRows}
        InputProps={
          inputIcons == 'start'
            ? {
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }
            : inputIcons == 'end'
            ? { endAdornment: <InputAdornment position="end">$</InputAdornment> }
            : null
        }
      />
    </Wrapper>
  );
};

description.story = {
  parameters: {
    docs: {
      page: TextFieldDescriptionDocs,
    },
  },
};

description.args = {
  defaultValue: 'Hello World',
  label: 'Label',
  formProps: 'text',
  error: false,
  multilineRows: 1,
};
