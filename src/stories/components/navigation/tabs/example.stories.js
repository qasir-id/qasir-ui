// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import SimpleTabs from './tabs-simple';
import SimpleTabsDocs from './tabs-simple/docs.mdx';

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
  title: 'Components/Navigation/Tabs/Example',
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};
export const simpleTabs = () => (
  <Wrapper>
    <SimpleTabs />
  </Wrapper>
);

simpleTabs.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated
    docs: {
      page: SimpleTabsDocs,
    },
  },
};
