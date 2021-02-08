// Vendors
import React from 'react';

// Components
import TextField from 'components/inputs/TextField';

export const TextFieldValidationError = (props) => (
  <TextField error label="Error" defaultValue="Hello World" variant="outlined" {...props} />
);

export const TextFieldValidationErrorHelperText = (props) => (
  <TextField
    error
    label="Error"
    defaultValue="Hello World"
    helperText="Incorrect entry."
    variant="outlined"
    {...props}
  />
);

const TextFieldValidation = () => (
  <>
    {TextFieldValidationError()}
    {TextFieldValidationErrorHelperText()}
  </>
);

export default TextFieldValidation;
