// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';

import theme from '../../variables/theme';

export default (props) => {
  return (
    <ThemeProvider theme={theme}>
      <DialogContent {...props} />
    </ThemeProvider>
  );
};
