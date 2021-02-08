// Vendors
import React from 'react';

// Material UI
import InputAdornment from '@material-ui/core/InputAdornment';

// Components
import TextField from 'components/inputs/TextField';

export const TextFieldIconsStart = (props) => (
  <TextField
    label="Label"
    InputProps={{
      startAdornment: <InputAdornment position="start">$</InputAdornment>,
    }}
    variant="outlined"
    {...props}
  />
);

export const TextFieldIconsEnd = (props) => (
  <TextField
    label="Label"
    InputProps={{
      endAdornment: <InputAdornment position="end">$</InputAdornment>,
    }}
    variant="outlined"
    {...props}
  />
);

const TextFieldIcons = () => (
  <>
    {TextFieldIconsStart()}
    {TextFieldIconsEnd()}
  </>
);

export default TextFieldIcons;
