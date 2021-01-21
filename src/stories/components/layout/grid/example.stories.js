// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import GridSpacing from './grid-spacing';
import GridSpacingDocs from './grid-spacing/docs.mdx';

import GridFluidBasic from './grid-fluid-basic';
import GridFluidBasicDocs from './grid-fluid-basic/docs.mdx';

import GridFluidBreakpoints from './grid-fluid-breakpoints';
import GridFluidBreakpointsDocs from './grid-fluid-breakpoints/docs.mdx';

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
  title: 'Components/Layout/Grid/Example',
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};

export const spacing = () => (
  <Wrapper>
    <GridSpacing />
  </Wrapper>
);
spacing.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: GridSpacingDocs,
    },
  },
};

export const fluidBasic = () => (
  <Wrapper>
    <GridFluidBasic />
  </Wrapper>
);
fluidBasic.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: GridFluidBasicDocs,
    },
  },
};

export const fluidBreakpoints = () => (
  <Wrapper>
    <GridFluidBreakpoints />
  </Wrapper>
);
fluidBreakpoints.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: GridFluidBreakpointsDocs,
    },
  },
};
