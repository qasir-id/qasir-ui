// Vendors
import React from "react";

import Checkbox from 'components/inputs/Checkbox';

import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CheckboxWithForm = (props) => {
  const [state, setState] = React.useState({
    checkedOne: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedOne}
            onChange={handleChange}
            name="checkedOne"
          />
        }
        label= " With Form"
      />
    </FormGroup>
  );
};

export default CheckboxWithForm;
