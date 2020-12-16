// Vendors
import React from 'react';

// Components
import TextField from 'components/inputs/TextField';

const TextFieldFormProps = () => {
  return (
    <>
      <TextField required label="Required" defaultValue="Hello World" variant="outlined" />
      <TextField disabled label="Disabled" defaultValue="Hello World" variant="outlined" />
      <TextField label="Password" type="password" autoComplete="current-password" variant="outlined" />
      <TextField
        label="Read Only"
        defaultValue="Hello World"
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
      />
      <TextField
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <TextField label="Search field" type="search" variant="outlined" />
      <TextField
        label="Helper text"
        defaultValue="Hello World"
        helperText="Some important text"
        variant="outlined"
      />
    </>
  );
};

export default TextFieldFormProps;
