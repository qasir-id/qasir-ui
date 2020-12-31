// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import theme from '../../variables/theme';

export default (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Container {...props} />
    </ThemeProvider>
  );
};
