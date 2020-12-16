// Vendors
import React from 'react';

// Components
import TextField from 'components/inputs/TextField';

const TextFieldIcons = () => {
  return (
    <>
      <TextField label="Single Line Field" variant="outlined" />
      <TextField label="Multi Line Field" variant="outlined" multiline rows={4} />
    </>
  );
};

export default TextFieldIcons;
