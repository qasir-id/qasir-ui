// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import theme from '../../variables/theme';

export default (props) => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <TextField {...props}>{children}</TextField>
    </ThemeProvider>
  );
};
