// Vendors
import React from 'react';

// Components
import TextField from 'components/inputs/TextField';

const TextFieldValidation = () => {
  return (
    <>
      <TextField error label="Error" defaultValue="Hello World" variant="outlined" />
      <TextField
        error
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
        variant="outlined"
      />
    </>
  );
};

export default TextFieldValidation;
