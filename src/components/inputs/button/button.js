// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import theme from '../../theme';

export default (props) => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <Button {...props}>{children}</Button>
    </ThemeProvider>
  );
};
