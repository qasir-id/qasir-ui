// Vendors
import React from 'react';

// Components
import Button from 'components/inputs/Button';

const ButtonSizes = () => {
  return (
    <>
      <Button variant="contained" color="primary" size="large">
        Large
      </Button>
      <Button variant="contained" color="primary">
        Medium
      </Button>
      <Button variant="contained" color="primary" size="small">
        Small
      </Button>
    </>
  );
};

export default ButtonSizes;
