// Vendors
import React from 'react';
import withWidth from '@material-ui/core/withWidth';

// Components
import Hidden from 'components/layout/Hidden';
import Box from 'components/layout/Box';

const defaultProps = {
  bgcolor: '#cfe8fc',
  p: 2,
  mb: 2,
  style: { width: '5rem', height: '5rem' },
};

const HiddenBreakpointDown = (props) => {
  const { width } = props;
  return (
    <>
      <p>
        Current width: <b>{width}</b>
      </p>
      <Hidden xsDown>
        <Box {...defaultProps}>xsDown</Box>
      </Hidden>
      <Hidden smDown>
        <Box {...defaultProps}>smDown</Box>
      </Hidden>
      <Hidden mdDown>
        <Box {...defaultProps}>mdDown</Box>
      </Hidden>
      <Hidden lgDown>
        <Box {...defaultProps}>lgDown</Box>
      </Hidden>
      <Hidden xlDown>
        <Box {...defaultProps}>xlDown</Box>
      </Hidden>
    </>
  );
};

export default withWidth()(HiddenBreakpointDown);
