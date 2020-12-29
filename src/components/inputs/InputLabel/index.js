// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

import theme from '../../variables/theme';

export default (props) => {
  return (
    <ThemeProvider theme={theme}>
      <InputLabel {...props} />
    </ThemeProvider>
  );
};
