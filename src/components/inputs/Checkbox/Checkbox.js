// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

import theme from '../../variables/theme';

export default (props) => {
    return(
        <ThemeProvider theme={theme}>
            <Checkbox {...props} />
        </ThemeProvider>
    );
};