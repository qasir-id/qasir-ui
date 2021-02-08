import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../variables/theme';



export default (props) => {
  const {children} = props
  return (
    <ThemeProvider theme={theme}>           
        <Tabs {...props}>
          {children}
        </Tabs>
    </ThemeProvider>
  );
}