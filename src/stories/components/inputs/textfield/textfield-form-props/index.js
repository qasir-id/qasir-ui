// Vendors
import React from 'react';

// Components
import TextField from 'components/inputs/TextField';

const TextFieldFormProps = () => {
  return (
    <>
      <TextField type="text" label="Text" defaultValue="Hello World" variant="outlined" />
      <TextField required label="Required" defaultValue="Hello World" variant="outlined" />
      <TextField disabled defaultValue="Disabled" variant="outlined" labelWidth={0} />
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
      <TextField
        label="Search field"
        type="search"
        variant="outlined"
        endIcon={<img src="component/assets/icons/close.svg" />}
      />
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
