// Vendors
import React from 'react';

// Components
import Chip from 'components/data-display/Chip';

const CustomChip = () => {
    return (
        <>
            <h2>Custom Chip</h2>
            <Chip customBackground="#FFFF00" customFont="#008000"  label="Custom Color"/>
        </>
    )
}
export default CustomChip;