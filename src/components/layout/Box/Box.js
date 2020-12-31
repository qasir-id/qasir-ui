// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import theme from '../../variables/theme';

export default (props) => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <Box {...props}>{children}</Box>
    </ThemeProvider>
  );
};
