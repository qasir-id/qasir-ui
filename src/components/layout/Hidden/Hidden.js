// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

import theme from '../../variables/theme';

export default (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Hidden {...props} />
    </ThemeProvider>
  );
};
