import React from 'react';
import Tab from '@material-ui/core/Tab';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../variables/theme';


export default (props) => {
  return (
    <ThemeProvider theme={theme}>           
        <Tab {...props} />   
    </ThemeProvider>
  );
}