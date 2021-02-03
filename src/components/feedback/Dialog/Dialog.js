// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

import theme from '../../variables/theme';

export default (props) => (
  <ThemeProvider theme={theme}>
    <Dialog {...props} />
  </ThemeProvider>
);
