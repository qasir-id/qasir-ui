// Vendors
import React from 'react';

// Components
import Chip from 'components/data-display/Chip';

const ChipComponent = () => {
  return (
    <>
      <h2>Small</h2>
      <Chip color="primary" label="Primary" size="small" />
      <Chip color="secondary" label="Secondary" size="small" />
      <Chip color="default" label="Default" size="small" />

      <br />
      <h2>Medium</h2>
      <Chip color="primary" label="Primary" size="medium" />
      <Chip color="secondary" label="Secondary" size="medium" />
      <Chip color="default" label="Default" size="medium" />

      <br />
      <h2>Disabled</h2>
      <Chip color="primary" label="Primary" size="medium" disabled/>
      <Chip color="secondary" label="Secondary" size="medium" disabled/>
      <Chip color="default" label="Default" size="medium" disabled/>


    </>
  );
};

export default ChipComponent;