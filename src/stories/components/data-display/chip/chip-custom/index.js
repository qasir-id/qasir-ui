// Vendors
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Chip from 'components/data-display/Chip';

const CustomChip = (props) => {
    const {customBackground, customFont} = props;
    return (
        <>
            <Chip 
                customBackground={customBackground} 
                customFont={customFont} 
                label="Custom Color" 
                {...props}
            />
        </>
    )
}
CustomChip.propTypes = {
    customBackground: PropTypes.string.isRequired,
    customFont: PropTypes.string.isRequired
}

CustomChip.defaultProps = {
    customBackground: "#FFFF00",
    customFont: "#008000"
}
export default CustomChip;