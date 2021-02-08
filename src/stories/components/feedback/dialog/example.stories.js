// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import DialogSimple from './dialog-simple';
import DialogSimpleDocs from './dialog-simple/docs.mdx';

import DialogMaxWidth from './dialog-max-width';
import DialogMaxWidthDocs from './dialog-max-width/docs.mdx';

import DialogFullScreen from './dialog-full-screen';
import DialogFullScreenDocs from './dialog-full-screen/docs.mdx';

import DialogDisableBackdropClick from './dialog-disable-backdrop-click';
import DialogDisableBackdropClickDocs from './dialog-disable-backdrop-click/docs.mdx';

import DialogDisableEscapeKeyDown from './dialog-disable-escape-key-down';
import DialogDisableEscapeKeyDownDocs from './dialog-disable-escape-key-down/docs.mdx';

import DialogFullWidth from './dialog-full-width';
import DialogFullWidthDocs from './dialog-full-width/docs.mdx';

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

export const dialog = () => (
  <Wrapper>
    <DialogSimple />
  </Wrapper>
);
dialog.story = {
  title: 'Simple Dialog',
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: DialogSimpleDocs,
    },
  },
};

export const maxWidth = () => (
  <Wrapper>
    <DialogMaxWidth />
  </Wrapper>
);
maxWidth.story = {
  title: 'Dialog Max Width',
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: DialogMaxWidthDocs,
    },
  },
};

export const fullScreen = () => (
  <Wrapper>
    <DialogFullScreen />
  </Wrapper>
);
fullScreen.story = {
  title: 'Dialog Full Screen',
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: DialogFullScreenDocs,
    },
  },
};

export const fullWidth = () => (
  <Wrapper>
    <DialogFullWidth />
  </Wrapper>
);
fullWidth.story = {
  title: 'Dialog Full Width',
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: DialogFullWidthDocs,
    },
  },
};

export const disableBackdropClick = () => (
  <Wrapper>
    <DialogDisableBackdropClick />
  </Wrapper>
);
disableBackdropClick.story = {
  title: 'Dialog Disable Backdrop Click',
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: DialogDisableBackdropClickDocs,
    },
  },
};

export const disableEscapeKeyDown = () => (
  <Wrapper>
    <DialogDisableEscapeKeyDown />
  </Wrapper>
);
disableEscapeKeyDown.story = {
  title: 'Dialog Disable Escape Key Down',
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: DialogDisableEscapeKeyDownDocs,
    },
  },
};
