// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import SnackbarSimple from './snackbar-simple';
import SnackbarSimpleDocs from './snackbar-simple/docs.mdx';

import SnackbarCustomized from './snackbar-customized';
import SnackbarCustomizedDocs from './snackbar-customized/docs.mdx';

import SnackbarPositioned from './snackbar-positioned';
import SnackbarPositionedDocs from './snackbar-positioned/docs.mdx';

import SnackbarConsecutive from './snackbar-consecutive';
import SnackbarConsecutiveDocs from './snackbar-consecutive/docs.mdx';

import SnackbarTransition from './snackbar-transition';
import SnackbarTransitionDocs from './snackbar-transition/docs.mdx';

import SnackbarSlideDirection from './snackbar-slide-direction';
import SnackbarSlideDirectionDocs from './snackbar-slide-direction/docs.mdx';

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
  title: 'Components/Feedback/Snackbar/Example',
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};

export const simple = () => (
  <Wrapper>
    <SnackbarSimple />
  </Wrapper>
);
simple.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: SnackbarSimpleDocs,
    },
  },
};

export const customized = () => (
  <Wrapper>
    <SnackbarCustomized />
  </Wrapper>
);
customized.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: SnackbarCustomizedDocs,
    },
  },
};

export const positioned = () => (
  <Wrapper>
    <SnackbarPositioned />
  </Wrapper>
);
positioned.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: SnackbarPositionedDocs,
    },
  },
};

export const consecutive = () => (
  <Wrapper>
    <SnackbarConsecutive />
  </Wrapper>
);
consecutive.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: SnackbarConsecutiveDocs,
    },
  },
};

export const transition = () => (
  <Wrapper>
    <SnackbarTransition />
  </Wrapper>
);
transition.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: SnackbarTransitionDocs,
    },
  },
};

export const slideDirection = () => (
  <Wrapper>
    <SnackbarSlideDirection />
  </Wrapper>
);
slideDirection.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: SnackbarSlideDirectionDocs,
    },
  },
};
