// Vendors
import React from 'react';

// Components
import Button from 'components/inputs/Button';

const ButtonIcons = () => {
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
      <Button variant="outlined">Outline</Button>
      <Button variant="text">Text</Button>
    </>
  );
};

export default ButtonIcons;
