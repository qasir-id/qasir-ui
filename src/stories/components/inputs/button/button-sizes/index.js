// Vendors
import React from 'react';

// Components
import Button from 'components/inputs/Button';

export const ButtonLarge = (props) => (
  <Button variant="contained" color="primary" size="large" {...props}>
    Large
  </Button>
);

export const ButtonMedium = (props) => (
  <Button variant="contained" color="primary" {...props}>
    Medium
  </Button>
);

export const ButtonSmall = (props) => (
  <Button variant="contained" color="primary" size="small" {...props}>
    Small
  </Button>
);

const ButtonSizes = () => {
  return (
    <>
      {ButtonLarge()}
      {ButtonMedium()}
      {ButtonSmall()}
    </>
  );
};

export default ButtonSizes;
