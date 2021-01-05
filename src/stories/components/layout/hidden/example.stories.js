// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import HiddenBreakpointUp from './hidden-breakpoint-up';
import HiddenBreakpointUpDocs from './hidden-breakpoint-up/docs.mdx';

import HiddenBreakpointDown from './hidden-breakpoint-down';
import HiddenBreakpointDownDocs from './hidden-breakpoint-down/docs.mdx';

import HiddenBreakpointOnly from './hidden-breakpoint-only';
import HiddenBreakpointOnlyDocs from './hidden-breakpoint-only/docs.mdx';

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
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: HiddenBreakpointUpDocs,
    },
  },
};

export const breakpointDown = () => (
  <Wrapper>
    <HiddenBreakpointDown />
  </Wrapper>
);
breakpointDown.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: HiddenBreakpointDownDocs,
    },
  },
};

export const breakpointOnly = () => (
  <Wrapper>
    <HiddenBreakpointOnly />
  </Wrapper>
);
breakpointOnly.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: HiddenBreakpointOnlyDocs,
    },
  },
};
