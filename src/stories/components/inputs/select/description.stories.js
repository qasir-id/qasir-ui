// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

// Components
import InputLabel from 'components/inputs/InputLabel';
import Select from 'components/inputs/Select';
import SelectDescriptionDocs from './description.docs.mdx';

import 'font-family.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Wrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default {
  title: 'Components/Inputs/Select',
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
};
export const description = () => (
  <Wrapper>
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
  </Wrapper>
);

description.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated
    docs: {
      page: SelectDescriptionDocs,
    },
  },
};
