// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';

import theme from '../../variables/theme';

export default (props) => {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <Select {...props}>{children}</Select>
    </ThemeProvider>
  );
};
