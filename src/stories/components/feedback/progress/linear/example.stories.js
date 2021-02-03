// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import ProgressLinearIndeterminate from './progress-linear-indeterminate';
import ProgressLinearIndeterminateDocs from './progress-linear-indeterminate/docs.mdx';

import ProgressLinearDeterminate from './progress-linear-determinate';
import ProgressLinearDeterminateDocs from './progress-linear-determinate/docs.mdx';

import ProgressLinearBuffer from './progress-linear-buffer';
import ProgressLinearBufferDocs from './progress-linear-buffer/docs.mdx';

import ProgressLinearWithLabel from './progress-linear-with-label';
import ProgressLinearWithLabelDocs from './progress-linear-with-label/docs.mdx';

import ProgressLinearCustomized from './progress-linear-customized';
import ProgressLinearCustomizedDocs from './progress-linear-customized/docs.mdx';

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
  title: 'Components/Feedback/Progress/Linear/Example',
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};

export const indeterminate = () => (
  <Wrapper>
    <ProgressLinearIndeterminate />
  </Wrapper>
);
indeterminate.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: ProgressLinearIndeterminateDocs,
    },
  },
};

export const determinate = () => (
  <Wrapper>
    <ProgressLinearDeterminate />
  </Wrapper>
);
determinate.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: ProgressLinearDeterminateDocs,
    },
  },
};

export const buffer = () => (
  <Wrapper>
    <ProgressLinearBuffer />
  </Wrapper>
);
buffer.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: ProgressLinearBufferDocs,
    },
  },
};

export const withLabel = () => (
  <Wrapper>
    <ProgressLinearWithLabel />
  </Wrapper>
);
withLabel.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: ProgressLinearWithLabelDocs,
    },
  },
};

export const customized = () => (
  <Wrapper>
    <ProgressLinearCustomized />
  </Wrapper>
);
customized.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: ProgressLinearCustomizedDocs,
    },
  },
};
