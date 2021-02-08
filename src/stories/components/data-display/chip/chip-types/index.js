// Vendors
import React from 'react';

// Components
import Chip from 'components/data-display/Chip';

export const ChipBasic = () => {
  return(
    <>
    <Chip label="Basic" />
    </>
  )
}

export const ChipOutlined = () => {
  return(
    <>
      <Chip label="Outlined" variant="outlined" />
    </>
  )
}
const ChipComponent = () => {
  return (
    <>
      {ChipBasic()}
      {ChipOutlined()}

    </>
  );
};

export default ChipComponent;