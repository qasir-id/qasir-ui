// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';

import theme from '../../variables/theme';

export default (props) => {
  return (
    <ThemeProvider theme={theme}>
      <DialogTitle {...props} />
    </ThemeProvider>
  );
};
