// Vendors
import React from 'react';

// Components
import Chip from 'components/data-display/Chip';

const CustomChip = () => {
    return (
        <>
            <h2>Custom Chip</h2>
            <Chip className="MuiChip-alert" label="Alert"/>
            <Chip className="MuiChip-positive" label="Positive"/>
            <Chip className="MuiChip-warning" label="Warning"/>
            <Chip className="MuiChip-discount" label="Discount"/>
        </>
    )
}
export default CustomChip;
