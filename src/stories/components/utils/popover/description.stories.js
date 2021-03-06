// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import PopoverDescriptionDocs from './description.docs.mdx';

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
  title: 'Components/Utils/Popover',
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
};

export const description = ({ type }) => (
  <Wrapper>
    <h3 style={{ textAlign: 'center' }}>Under Construction</h3>
  </Wrapper>
);

description.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated
    docs: {
      page: PopoverDescriptionDocs,
    },
  },
};
