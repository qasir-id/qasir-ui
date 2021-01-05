// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import HiddenBreakpointUp from './hidden-breakpoint-up';
import HiddenBreakpointUpDocs from './hidden-breakpoint-up/docs.mdx';

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
  title: 'Components/Layout/Hidden/Example',
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};

export const breakpointUp = () => (
  <Wrapper>
    <HiddenBreakpointUp />
  </Wrapper>
);
breakpointUp.story = {
  breakpointUp: {
    name: 'Breakpoint Up',
    status: 'Development', // Stable | Development | Deprecated
    docs: {
      page: HiddenBreakpointUpDocs,
    },
  },
};
