// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

import theme from '../../variables/theme';

export default (props) => {
    const { customBackground, customFont } = props
    return (
        <ThemeProvider theme={theme}>
            <Chip style={{backgroundColor: customBackground, color: customFont}} {...props}/>
        </ThemeProvider>
    )
}
