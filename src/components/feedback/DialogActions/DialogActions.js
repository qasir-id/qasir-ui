// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';

import theme from '../../variables/theme';

export default (props) => {
  return (
    <ThemeProvider theme={theme}>
      <DialogActions {...props} />
    </ThemeProvider>
  );
};
