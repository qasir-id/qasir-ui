// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import GridSpacing from './grid-spacing';
import GridFluidBasic from './grid-fluid-basic';
import GridFluidBreakpoints from './grid-fluid-breakpoints';
import GridInteractive from './grid-interactive';
import GridAutoLayout from './grid-auto-layout';
import GridNested from './grid-nested';
import GridDescriptionDocs from './description.docs.mdx';

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
  title: 'Components/Layout/Grid',
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    type: {
      name: 'Example',
      control: {
        type: 'select',
        options: ['spacing', 'fluid basic', 'fluid breakpoints', 'interactive', 'auto layout', 'nested grid'],
      },
    },
  },
};

export const description = ({ type }) => (
  <Wrapper>
    {type == 'spacing' && <GridSpacing />}
    {type == 'fluid basic' && <GridFluidBasic />}
    {type == 'fluid breakpoints' && <GridFluidBreakpoints />}
    {type == 'interactive' && <GridInteractive />}
    {type == 'auto layout' && <GridAutoLayout />}
    {type == 'nested grid' && <GridNested />}
  </Wrapper>
);

description.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: GridDescriptionDocs,
    },
  },
};

description.args = {
  type: 'spacing',
};
