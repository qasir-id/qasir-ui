// Vendors
import React from 'react';

// Components
import Box from 'components/layout/Box';

const defaultProps = {
  bgcolor: '#cfe8fc',
  m: 1,
  p: 1,
};

const BoxDisplay = () => {
  return (
    <>
      <h3 style={{ paddingLeft: 7, marginBottom: 20 }}>Inline</h3>
      <div style={{ width: '100%' }}>
        <Box display="inline" {...defaultProps}>
          inline
        </Box>
        <Box display="inline" {...defaultProps}>
          inline
        </Box>
      </div>

      <h3 style={{ paddingLeft: 7, marginBottom: 10, marginTop: 30 }}>Block</h3>
      <div style={{ width: '100%' }}>
        <Box display="block" {...defaultProps}>
          block
        </Box>
        <Box display="block" {...defaultProps}>
          block
        </Box>
      </div>

      <h3 style={{ paddingLeft: 7, marginBottom: 10, marginTop: 30 }}>Hiding elements</h3>
      <div style={{ width: '100%' }}>
        <Box display={{ xs: 'block', md: 'none' }} {...defaultProps}>
          hide on screens wider than md
        </Box>
        <Box display={{ xs: 'none', md: 'block' }} {...defaultProps}>
          hide on screens smaller than md
        </Box>
      </div>

      <h3 style={{ paddingLeft: 7, marginBottom: 10, marginTop: 30 }}>Display in print</h3>
      <div style={{ width: '100%' }}>
        <Box display="block" displayPrint="none" {...defaultProps}>
          Screen Only (Hide on print only)
        </Box>
        <Box display="none" displayPrint="block" {...defaultProps}>
          Print Only (Hide on screen only)
        </Box>
      </div>

      <h3 style={{ paddingLeft: 7, marginBottom: 10, marginTop: 30 }}>Overflow</h3>
      <div style={{ width: 200, whiteSpace: 'nowrap' }}>
        <Box overflow="hidden" {...defaultProps}>
          Overflow Hidden. Overflow Hidden. Overflow Hidden.
        </Box>
        <Box overflow="auto" {...defaultProps}>
          Overflow Auto. Overflow Auto. Overflow Auto.
        </Box>
      </div>

      <h3 style={{ paddingLeft: 7, marginBottom: 10, marginTop: 30 }}>Text Overflow</h3>
      <div style={{ width: 200, whiteSpace: 'nowrap' }}>
        <Box textOverflow="clip" overflow="hidden" {...defaultProps}>
          Text Overflow Clip. Text Overflow Clip.
        </Box>
        <Box textOverflow="ellipsis" overflow="hidden" {...defaultProps}>
          Text Overflow Ellipsis. Text Overflow Ellipsis.
        </Box>
      </div>

      <h3 style={{ paddingLeft: 7, marginBottom: 10, marginTop: 30 }}>Visibility</h3>
      <div style={{ width: '100%' }}>
        <Box visibility="visible" {...defaultProps}>
          Visibility Visible
        </Box>
        <Box visibility="hidden" {...defaultProps}>
          Visibility Hidden
        </Box>
      </div>

      <h3 style={{ paddingLeft: 7, marginBottom: 10, marginTop: 30 }}>White Space</h3>
      <div style={{ width: 200 }}>
        <Box whiteSpace="nowrap" {...defaultProps}>
          White Space Nowrap
        </Box>
        <Box whiteSpace="nowrap" {...defaultProps}>
          White Space Normal
        </Box>
      </div>
    </>
  );
};

export default BoxDisplay;
