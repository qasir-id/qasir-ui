import React from 'react';
import Pagination from 'components/lab/Pagination';

export const StandardOutlinedPagination = (props) => {
    return(
        <Pagination count={10} color="standard" variant="outlined" {...props} />
    )
};

export const PrimaryOutlinedPagination = (props) => {
    return(
        <Pagination count={10} color="primary" variant="outlined" {...props} />
    )
};

export const SecondaryOutlinedPagination = (props) => {
    return(
        <Pagination count={10} color="secondary" variant="outlined" {...props} />
    )
};

export const DisabledOutlinedPagination = (props) => {
    return(
        <Pagination count={10} variant="outlined" disabled />
    )
};

export const StandardRoundedPagination = (props) => {
    return(
        <Pagination count={10} shape="rounded" />
    )
};

export const PrimaryRoundedPagination = (props) => {
    return(
        <Pagination count={10} shape="rounded" color="primary" />
    )
};

export const SecondaryRoundedPagination = (props) => {
    return(
        <Pagination count={10} shape="rounded" color="secondary" />
    )
};

export const DisabledRoundedPagination = (props) => {
    return(
        <Pagination count={10} shape="rounded" disabled />
    )
};

export const OutlinedRoundedPagination = (props) => {
    return(
        <Pagination count={10} shape="rounded" variant="outlined" />
    )
};

export const PrimaryOutlinedRoundedPagination = (props) => {
    return(
        <Pagination count={10} shape="rounded" variant="outlined" color="primary" />
    )
};

export const SecondaryOutlinedRoundedPagination = (props) => {
    return(
        <Pagination count={10} shape="rounded" variant="outlined" color="secondary" />
    )
};

export const DisabledOutlinedRoundedPagination = (props) => {
    return(
        <Pagination count={10} shape="rounded" disabled />
    )
};


const PaginationProps = () => {
    return(
        <>
            {StandardOutlinedPagination()}
            {PrimaryOutlinedPagination()}
            {SecondaryOutlinedPagination()}
            {DisabledOutlinedPagination()}
            {StandardRoundedPagination()}
            {OutlinedRoundedPagination()}
            {PrimaryOutlinedRoundedPagination()}
            {SecondaryOutlinedRoundedPagination()}
            {DisabledOutlinedRoundedPagination()}
        </>
    )
};

export default PaginationProps;