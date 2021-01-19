// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import DialogSimple from './dialog-simple';
import DialogSimpleDocs from './dialog-simple/docs.mdx';

import 'font-family.css';

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
  title: 'Components/Feedback/Dialog/Example',
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};

export const simple = () => (
  <Wrapper>
    <DialogSimple />
  </Wrapper>
);
simple.story = {
  title: 'Simple Dialog',
  parameters: {
    status: 'Development', // Stable | Development | Deprecated
    docs: {
      page: DialogSimpleDocs,
    },
  },
};
