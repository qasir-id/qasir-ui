// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

import theme from '../../variables/theme';



export default (props) => {
    const { customBackground, customFont } = props
    
    const useStyle = makeStyles({
        custom: {
            backgroundColor: customBackground,
            color: customFont
        }
    })
    const classes = useStyle();

    return (
        <ThemeProvider theme={theme}>
            <Chip style={props.style} className={classes.custom} {...props}/>
        </ThemeProvider>
    )
}
