// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import theme from '../../variables/theme';

export default (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box {...props} style={{ fontFamily: ['"Montserrat"', 'sans-serif'].join(',') }} />
    </ThemeProvider>
  );
};
