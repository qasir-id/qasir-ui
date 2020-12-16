// Vendors
import React from 'react';

// Material UI
import MenuItem from '@material-ui/core/MenuItem';

// Components
import TextField from 'components/inputs/TextField';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const TextFieldSelect = () => {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <>
      <TextField
        select
        label="Select"
        value={currency}
        onChange={handleChange}
        helperText="Please select your currency"
        variant="outlined"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Native select"
        value={currency}
        onChange={handleChange}
        SelectProps={{
          native: true,
        }}
        helperText="Please select your currency"
        variant="outlined"
      >
        {currencies.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </>
  );
};

export default TextFieldSelect;
