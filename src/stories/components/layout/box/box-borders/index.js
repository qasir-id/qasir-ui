// Vendors
import React from 'react';

// Components
import Box from 'components/layout/Box';

const defaultProps = {
  bgcolor: '#cfe8fc',
  m: 1,
  style: { width: '5rem', height: '5rem' },
};

const BoxBorders = () => {
  return (
    <>
      <h3 style={{ paddingLeft: 7 }}>Border</h3>
      <Box display="flex" justifyContent="left">
        <Box border={1} {...defaultProps} />
        <Box borderTop={1} {...defaultProps} />
        <Box borderRight={1} {...defaultProps} />
        <Box borderBottom={1} {...defaultProps} />
        <Box borderLeft={1} {...defaultProps} />
      </Box>

      <h3 style={{ marginTop: 30, paddingLeft: 7 }}>Border Color</h3>
      <Box display="flex" justifyContent="left">
        <Box borderColor="#F04B32" border={1} {...defaultProps} />
        <Box borderColor="#737580" border={1} {...defaultProps} />
        <Box borderColor="#FFA000" border={1} {...defaultProps} />
        <Box borderColor="#4F94FC" border={1} {...defaultProps} />
        <Box borderColor="#33CC59" border={1} {...defaultProps} />
      </Box>

      <h3 style={{ marginTop: 30, paddingLeft: 7 }}>Border Radius</h3>
      <Box display="flex" justifyContent="left">
        <Box borderRadius="50%" {...defaultProps} />
        <Box borderRadius="borderRadius" {...defaultProps} />
        <Box borderRadius={16} {...defaultProps} />
      </Box>
    </>
  );
};

export default BoxBorders;
