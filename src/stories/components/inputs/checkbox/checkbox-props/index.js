// Vendors
import React from "react";

// Components
import Checkbox from "components/inputs/Checkbox";

export const PrimaryCheckbox = () => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => setChecked(event.target.checked);
  return (
    <>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </>
  );
};
export const SecondaryCheckbox = () => {
  return (
    <>
      <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </>
  );
};

export const UncontrollableCheckbox = () => {
  return (
    <>
      <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
    </>
  );
};

export const DisabledCheckbox = () => {
  return (
    <>
      <Checkbox disabled inputProps={{ "aria-label": "disabled checkbox" }} />
    </>
  );
};

export const DisabledCheckedCheckbox = () => {
  return (
    <>
      <Checkbox
        disabled
        checked
        inputProps={{ "aria-label": "disabled checked checkbox" }}
      />
    </>
  );
};

export const IndeterminateCheckbox = () => {
  return (
    <>
      <Checkbox
        defaultChecked
        indeterminate
        inputProps={{ "aria-label": "indeterminate checkbox" }}
      />
    </>
  );
};

export const DefaultCheckbox = () => {
  return (
    <>
      <Checkbox
        defaultChecked
        color="default"
        inputProps={{ "aria-label": "checkbox with default color" }}
      />
    </>
  );
};

export const CheckboxSmall = () => {
  return (
    <>
      <Checkbox
        defaultChecked
        size="small"
        inputProps={{ "aria-label": "checkbox with small size" }}
      />
    </>
  );
};
export const CheckboxProps = () => {
  return (
    <>
      {PrimaryCheckbox()}
      {SecondaryCheckbox()}
      {UncontrollableCheckbox()}
      {DisabledCheckbox()}
      {DisabledCheckedCheckbox()}
      {IndeterminateCheckbox()}
      {DefaultCheckbox()}
      {CheckboxSmall()}
    </>
  );
};

export default CheckboxProps;
