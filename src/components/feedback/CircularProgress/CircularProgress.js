// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import theme from '../../variables/theme';

export default (props) => (
  <ThemeProvider theme={theme}>
    <CircularProgress {...props} />
  </ThemeProvider>
);
