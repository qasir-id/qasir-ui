// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

import theme from '../../variables/theme';

export default (props) => {
    return(
        <ThemeProvider theme={theme}>
            <Pagination {...props} />
        </ThemeProvider>
    );
};