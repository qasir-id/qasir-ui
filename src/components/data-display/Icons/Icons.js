// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

import theme from '../../variables/theme';

export default (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Chip style={props.style} className={classes.custom} {...props} />
    </ThemeProvider>
  );
};
