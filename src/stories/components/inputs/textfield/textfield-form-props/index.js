// Vendors
import React from 'react';

// Components
import TextField from 'components/inputs/TextField';

const TextFieldTypes = () => {
  return (
    <>
      <TextField required label="Required*" defaultValue="Hello World" variant="outlined" />
    </>
  );
};

export default TextFieldTypes;
