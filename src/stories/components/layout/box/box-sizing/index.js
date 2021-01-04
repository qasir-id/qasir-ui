// Vendors
import React from 'react';

// Components
import Box from 'components/layout/Box';

export const BoxSizingSupportedValues = () => (
  <>
    <h3>Supported values</h3>
    <Box width="100%">
      <Box width={1 / 4} bgcolor="#cfe8fc" p={1} my={0.5}>
        Width 1/4
      </Box>
      <Box width={300} bgcolor="#cfe8fc" p={1} my={0.5}>
        Width 300
      </Box>
      <Box width="75%" bgcolor="#cfe8fc" p={1} my={0.5}>
        Width 75%
      </Box>
      <Box width={1} bgcolor="#cfe8fc" p={1} my={0.5}>
        Width 1
      </Box>
    </Box>
  </>
);

export const BoxSizingWidth = () => (
  <>
    <h3 style={{ marginTop: 20 }}>Width</h3>
    <Box width="100%">
      <Box width="25%" bgcolor="#cfe8fc" p={1} my={0.5}>
        Width 25%
      </Box>
      <Box width="50%" bgcolor="#cfe8fc" p={1} my={0.5}>
        Width 50%
      </Box>
      <Box width="75%" bgcolor="#cfe8fc" p={1} my={0.5}>
        Width 75%
      </Box>
      <Box width="100%" bgcolor="#cfe8fc" p={1} my={0.5}>
        Width 100%
      </Box>
      <Box width="auto" bgcolor="#cfe8fc" p={1} my={0.5}>
        Width auto
      </Box>
    </Box>
  </>
);

export const BoxSizingHeight = () => (
  <>
    <h3 style={{ marginTop: 20 }}>Height</h3>
    <Box height={100} width="100%">
      <Box height="25%" bgcolor="#cfe8fc" p={0.5} mr={0.5} width={120} display="inline-block">
        Height 25%
      </Box>
      <Box height="50%" bgcolor="#cfe8fc" p={0.5} mr={0.5} width={120} display="inline-block">
        Height 50%
      </Box>
      <Box height="75%" bgcolor="#cfe8fc" p={0.5} mr={0.5} width={120} display="inline-block">
        Height 75%
      </Box>
      <Box height="100%" bgcolor="#cfe8fc" p={0.5} mr={0.5} width={120} display="inline-block">
        Height 100%
      </Box>
    </Box>
  </>
);

const BoxSizing = () => (
  <>
    {BoxSizingSupportedValues()}
    {BoxSizingWidth()}
    {BoxSizingHeight()}
  </>
);

export default BoxSizing;
