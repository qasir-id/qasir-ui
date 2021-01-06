import React from 'react';
import Pagination from 'components/lab/Pagination';

export const StandardPagination = (props) => {
    return(
        <Pagination count={10} color="standard" {...props} />
    )
};

export const PrimaryPagination = (props) => {
    return(
        <Pagination count={10} color="primary" {...props} />
    )
};

export const SecondaryPagination = (props) => {
    return(
        <Pagination count={10} color="secondary" {...props} />
    )
};

export const DisabledPagination = (props) => {
    return(
        <Pagination count={10} disabled />
    )
}

const BasicPagination = () => {
    return(
        <>
          {StandardPagination()}
          {PrimaryPagination()}
          {SecondaryPagination()}
          {DisabledPagination()}
        </>
    );
};

export default BasicPagination;