// Vendors
import React from 'react';

// Material UI
import { ThemeProvider } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';

import theme from '../../variables/theme';

export default (props) => {
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    return(
        <ThemeProvider theme={theme}>
            <TablePagination 
                 component="div"
                 count={100}
                 page={page}
                 onChangePage={handleChangePage}
                 rowsPerPage={rowsPerPage}
                 onChangeRowsPerPage={handleChangeRowsPerPage}
                 {...props}
            />
        </ThemeProvider>
    )
}