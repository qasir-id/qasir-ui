// Vendors
import React from 'react';

// Components
import Button from 'components/inputs/Button';

const ButtonFullWidth = (props) => {
  return (
    <>
      <Button variant="contained" color="primary" fullWidth {...props}>
        Full Width
      </Button>
    </>
  );
};

export default ButtonFullWidth;
