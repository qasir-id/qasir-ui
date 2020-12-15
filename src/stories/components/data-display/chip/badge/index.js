// Vendors
import React from 'react';

// Components
import Badge from 'components/data_display/chip';

const BadgeComponent = () => {
    return(
        <> 
            <h2>Small</h2>
            <Badge color="primary" label="Primary" size="small"/>
            <Badge color="secondary" label="Secondary" size="small"/>
            <Badge color="default" label="Default" size="small"/>

            <br/>
            <h2>Medium</h2>
            <Badge color="primary" label="Primary" size="medium"/>
            <Badge color="secondary" label="Secondary" size="medium"/>
            <Badge color="default" label="Default" size="medium"/>
            
            
        </>
    )
}

export default BadgeComponent;