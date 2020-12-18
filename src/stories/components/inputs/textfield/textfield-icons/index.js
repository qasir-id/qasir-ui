// Vendors
import React from 'react';

// Material UI
import InputAdornment from '@material-ui/core/InputAdornment';

// Components
import TextField from 'components/inputs/TextField';

const TextFieldIcons = () => {
  return (
    <>
      <TextField
        label="Label"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        variant="outlined"
      />
      <TextField
        label="Label"
        InputProps={{
          endAdornment: <InputAdornment position="end">$</InputAdornment>,
        }}
        variant="outlined"
      />
    </>
  );
};

export default TextFieldIcons;
