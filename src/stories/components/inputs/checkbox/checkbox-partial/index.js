// Vendors
import React from 'react';
import StopIcon from '@material-ui/icons/Stop';

import CheckBox from 'components/inputs/Checkbox';


const CheckboxPartial = (props) => {
    const styles = {
       iconStyle: {
           fill: '#f04b32',
           border: '2px solid #DADCE5',
           borderRadius: '2px',
       }
    }
    return(
        <>
            <CheckBox
                checkedIcon={<StopIcon fontSize="small" style={styles.iconStyle} />}
                inputProps={{ 'aria-label': 'decorative checkbox' }}
            />
        </>
    )
}

export default CheckboxPartial;