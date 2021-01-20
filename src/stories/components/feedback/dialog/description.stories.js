// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import DialogSimple from './dialog-simple';
import DialogSimpleDocs from './description.docs.mdx';

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
  title: 'Components/Feedback/Dialog',
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
    options: {showPanel: true}
  },
  argTypes: {
    maxWidth: {
      name: 'Max Width',
      control: {
        type: 'select',
        options: ['xl', 'lg', 'md', 'sm', 'xs', 'false'],
      },
      defaultValue: 'sm',
    },
    fullScreen: {
      name: 'Full Screen',
      control: {
        type: 'boolean',
      },
    },
    fullWidth: {
      name: 'Full Width',
      control: {
        type: 'boolean',
      },
    },
    disableBackdropClick: {
      name: 'Disable Backdrop Click',
      control: {
        type: 'boolean',
      },
    },
    disableEscapeKeyDown: {
      name: 'Disable Escape Key Down',
      control: {
        type: 'boolean',
      },
    },
  },
};

export const description = ({ maxWidth, fullScreen, fullWidth, disableBackdropClick, disableEscapeKeyDown }) => (
  <Wrapper>
    <DialogSimple 
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      fullScreen={fullScreen}
      disableBackdropClick={disableBackdropClick}
      disableEscapeKeyDown={disableEscapeKeyDown}
    />
  </Wrapper>
);

description.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: DialogSimpleDocs,
    },
  },
};
