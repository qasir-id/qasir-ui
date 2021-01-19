// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import Checkbox from 'components/inputs/Checkbox';
import CheckboxDocs from './description.docs.mdx'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
  const Wrapper = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.root}>{children}</div>;
  };

  export default {
    title: 'Components/Inputs/Checkbox',
    parameters: {
      design: { disabled: true },
      options: { showPanel: true },
    },
    argTypes: {
       size: {
           name: 'Size',
           control: {
               type: 'select',
               options: ['small', 'medium']
           }
       },
       color: {
           name: 'Color',
           control: {
               type: 'select',
               options: ['default', 'primary', 'secondary']
           }
       },
       disabled: {
           name: 'Disabled',
           control: 'boolean'
       }
    }
  };

export const Description = (props, {size, color, disabled}) => {

  const [checked,setChecked] = React.useState(false)
  const handleChange = (event) => {
      setChecked(event.target.checked);
  }
  return (
    <Wrapper>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        size={size}
        color={color}
        disabled={disabled}
        {...props}
      />
    </Wrapper>
  );
}
Description.story = {
    parameters: {
        status: 'Development', // Stable | Development | Deprecated
        docs: {
            page: CheckboxDocs
        }
    }
}
Description.args = {
    size: 'medium',
    color: 'secondary',
    disabled: false
}