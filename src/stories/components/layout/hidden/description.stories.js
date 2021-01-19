// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import HiddenBreakpointUp from './hidden-breakpoint-up';
import HiddenBreakpointDown from './hidden-breakpoint-down';
import HiddenBreakpointOnly from './hidden-breakpoint-only';

import HiddenDescriptionDocs from './description.docs.mdx';

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
  title: 'Components/Layout/Hidden',
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    type: {
      name: 'Breakpoint',
      control: {
        type: 'select',
        options: ['up', 'down', 'only'],
      },
    },
  },
};

const defaultProps = {
  bgcolor: '#cfe8fc',
  m: 1,
  style: { width: '5rem', height: '5rem' },
  borderColor: 'text.primary',
};

export const description = ({ type }) => (
  <Wrapper>
    {type == 'up' && <HiddenBreakpointUp />}
    {type == 'down' && <HiddenBreakpointDown />}
    {type == 'only' && <HiddenBreakpointOnly />}
  </Wrapper>
);

description.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: HiddenDescriptionDocs,
    },
  },
};

description.args = {
  type: 'up',
};
