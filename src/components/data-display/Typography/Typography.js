// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import theme from '../../variables/theme';

export default (props) => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <Typography {...props}>{children}</Typography>
    </ThemeProvider>
  );
};
