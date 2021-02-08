import React from 'react';
import Pagination from 'components/lab/Pagination';

const ControlledPagination = (props) => {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value)
    }

    return(
        <>
            <p>Page : {page}</p>
            <Pagination count={10} page={page} onChange={handleChange} {...props}/>
        </>
    )
}

export default ControlledPagination;