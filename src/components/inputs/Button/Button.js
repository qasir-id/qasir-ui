// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';

// Qasir UI
import Button from '@material-ui/core/Button';

import theme from '../../variables/theme';

export default (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Button {...props} />
    </ThemeProvider>
  );
};
