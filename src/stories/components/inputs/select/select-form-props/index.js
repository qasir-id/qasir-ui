// Vendors
import React from 'react';

// Material UI
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

// Components
import Select from 'components/inputs/Select';
import InputLabel from 'components/inputs/InputLabel';

const SelectFormProps = () => {
  return (
    <>
      <FormControl variant="outlined" style={{ minWidth: 150 }}>
        <InputLabel>Simple Select</InputLabel>
        <Select
          label="Simple Select"
          inputProps={{
            name: 'simple-select',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" style={{ minWidth: 150 }}>
        <InputLabel>Native Select</InputLabel>
        <Select
          native
          label="Native Select"
          inputProps={{
            name: 'native-select',
            className: 'MuiSelectNative',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
    </>
  );
};

export default SelectFormProps;
