// Vendors
import React from 'react';

// Components
import Box from 'components/layout/Box';

export const BoxPaletteColor = () => (
  <>
    <h3>Color</h3>
    <Box color="#4F94FC">blue50</Box>
  </>
);

export const BoxPaletteBackgroundColor = () => (
  <>
    <h3 style={{ marginTop: 20 }}>Background Color</h3>
    <Box bgcolor="#4F94FC" color="#ffffff" p={2}>
      blue50
    </Box>
  </>
);

const BoxPalette = () => (
  <>
    {BoxPaletteColor()}
    {BoxPaletteBackgroundColor()}
  </>
);

export default BoxPalette;
