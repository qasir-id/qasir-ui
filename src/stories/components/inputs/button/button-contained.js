// Vendors
import React from 'react';

// Components
import Button from 'components/inputs/button';

const ButtonContained = () => {
  return (
    <>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disable
      </Button>
    </>
  );
};

export default ButtonContained;
