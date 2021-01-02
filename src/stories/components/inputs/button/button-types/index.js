// Vendors
import React from 'react';

// Components
import Button from 'components/inputs/Button';

export const ButtonPrimary = (props) => (
  <Button variant="contained" color="primary" {...props}>
    Primary
  </Button>
);

export const ButtonSecondary = (props) => (
  <Button variant="contained" color="secondary" {...props}>
    Secondary
  </Button>
);

export const ButtonDisable = (props) => (
  <Button variant="contained" disabled {...props}>
    Disable
  </Button>
);

export const ButtonOutline = (props) => (
  <Button variant="outlined" {...props}>
    Outline
  </Button>
);

export const ButtonText = (props) => (
  <Button variant="text" {...props}>
    Text
  </Button>
);

const ButtonTypes = () => (
  <>
    {ButtonPrimary()}
    {ButtonSecondary()}
    {ButtonDisable()}
    {ButtonOutline()}
    {ButtonText()}
  </>
);

export default ButtonTypes;
