// Vendors
import React from 'react';

import CheckBox from 'components/inputs/Checkbox';


const CheckboxPartial = (props) => {
    
    return(
        <>
            <CheckBox 
                inputProps={{ 'aria-label': 'decorative checkbox' }}
            />
        </>
    )
}

export default CheckboxPartial;