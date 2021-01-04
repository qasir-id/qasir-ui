// Vendors
import React from 'react';

// Components
import Box from 'components/layout/Box';

const BoxPositions = () => (
  <>
    <h3>Z-Index</h3>
    <div style={{ height: 100, width: '100%', position: 'relative' }}>
      <Box bgcolor="#c0d7e8" p={2} position="absolute" top={40} left="40%" zIndex="100">
        z-index 100
      </Box>
      <Box bgcolor="#cfe8fc" p={2} position="absolute" top={0} left="43%" zIndex="200">
        z-index 200
      </Box>
    </div>
  </>
);

export default BoxPositions;
