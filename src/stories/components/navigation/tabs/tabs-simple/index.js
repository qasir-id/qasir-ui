// Vendors
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Tabs from 'components/navigation/Tabs';

const SimpleTabs = (props) => {
    const [data, setData ] = React.useState([
        {id: '0', label: 'All Products', description: 'All Products'},
        {id: '1', label: 'Categories', description: 'All Categories'}
    ])
    return(
        <>
        <Tabs data={data} {...props}/>
        </>
    )
}

SimpleTabs.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default SimpleTabs;