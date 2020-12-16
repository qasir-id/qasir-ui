// Vendors
import React from 'react';

// Components
import TextField from 'components/inputs/TextField';

const TextFieldMultiline = () => {
  return (
    <>
      <TextField label="Hello World" variant="outlined" multiline rows={4} />
    </>
  );
};

export default TextFieldMultiline;
