// Vendors
import React from 'react';

// Components
import Checkbox from 'components/inputs/Checkbox';

const CheckboxBasic = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      color="primary"
      inputProps={{ 'aria-label': 'primary checkbox' }}
    />
  );
};

export default CheckboxBasic;
