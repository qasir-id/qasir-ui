// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import theme from '../../variables/theme';

export default (props) => (
  <ThemeProvider theme={theme}>
    <LinearProgress {...props} />
  </ThemeProvider>
);
