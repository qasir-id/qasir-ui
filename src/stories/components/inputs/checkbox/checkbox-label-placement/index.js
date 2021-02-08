// Vendors
import React from 'react';

// Components
import FormControlLabel from 'components/inputs/FormControlLabel';
import Checkbox from 'components/inputs/Checkbox';

export const CheckboxLabelStart = () => (
  <FormControlLabel
    value="start"
    control={<Checkbox color="primary" />}
    label="Start"
    labelPlacement="start"
  />
);

export const CheckboxLabelEnd = () => (
  <FormControlLabel value="end" control={<Checkbox color="primary" />} label="End" labelPlacement="end" />
);

export const CheckboxLabelTop = () => (
  <FormControlLabel value="top" control={<Checkbox color="primary" />} label="Top" labelPlacement="top" />
);

export const CheckboxLabelBottom = () => (
  <FormControlLabel
    value="bottom"
    control={<Checkbox color="primary" />}
    label="Bottom"
    labelPlacement="bottom"
  />
);

const CheckboxLabelPlacement = () => (
  <>
    {CheckboxLabelTop()}
    {CheckboxLabelStart()}
    {CheckboxLabelBottom()}
    {CheckboxLabelEnd()}
  </>
);

export default CheckboxLabelPlacement;
