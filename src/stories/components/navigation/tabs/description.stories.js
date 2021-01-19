// Vendors
import React from 'react';
import { action } from '@storybook/addon-actions';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import SimpleTabs from './tabs-simple';
import SimpleTabsDocs from './description.docs.mdx';

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
  title: 'Components/Navigation/Tabs',
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    variant: {
      name: 'Variant',
      control: {
        type: 'select',
        options: ['standard', 'scrollable', 'fullWidth'],
      },
    },
  },
};

export const description = ({variant}) => (
  
  <Wrapper>
    <SimpleTabs 
      variant={variant}
      onClick={action('onClick')}
      onMouseEnter={action('onMouseEnter')}
      onMouseLeave={action('onMouseLeave')}
    />
  </Wrapper>
);

description.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated
    docs: {
      page: SimpleTabsDocs,
    },
  },
};

description.args = {
  variant: 'standard'
}