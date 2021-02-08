// Vendors
import React from 'react';

// Material UI
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

// Components
import Checkbox from 'components/inputs/Checkbox';
import FormControlLabel from 'components/inputs/FormControlLabel';

export const PrimaryCheckbox = () => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => setChecked(event.target.checked);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          color="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      }
      label="Primary"
    />
  );
};

export const SecondaryCheckbox = () => {
  return (
    <FormControlLabel
      control={
        <Checkbox defaultChecked color="secondary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
      }
      label="Secondary"
    />
  );
};

export const UncontrollableCheckbox = () => {
  return (
    <FormControlLabel
      control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />}
      label="Uncontrolled"
    />
  );
};

export const DisabledCheckbox = () => {
  return (
    <FormControlLabel
      control={<Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />}
      label="Disabled"
    />
  );
};

export const DisabledCheckedCheckbox = () => {
  return (
    <FormControlLabel
      control={<Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />}
      label="Disabled checked"
    />
  );
};

export const IndeterminateCheckbox = () => {
  return (
    <FormControlLabel
      control={
        <Checkbox defaultChecked indeterminate inputProps={{ 'aria-label': 'indeterminate checkbox' }} />
      }
      label="Indeterminate"
    />
  );
};

export const CustomIconCheckbox = () => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          inputProps={{ 'aria-label': 'custom icon' }}
        />
      }
      label="Custom icon"
    />
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
      {CustomIconCheckbox()}
    </>
  );
};

export default CheckboxProps;
