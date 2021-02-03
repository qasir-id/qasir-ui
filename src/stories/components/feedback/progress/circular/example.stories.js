// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import ProgressCircularIndeterminate from './progress-circular-indeterminate';
import ProgressCircularIndeterminateDocs from './progress-circular-indeterminate/docs.mdx';

import ProgressCircularDeterminate from './progress-circular-determinate';
import ProgressCircularDeterminateDocs from './progress-circular-determinate/docs.mdx';

import ProgressCircularInteractiveIntegration from './progress-circular-interactive-integration';
import ProgressCircularInteractiveIntegrationDocs from './progress-circular-interactive-integration/docs.mdx';

import ProgressCircularWithLabel from './progress-circular-with-label';
import ProgressCircularWithLabelDocs from './progress-circular-with-label/docs.mdx';

import ProgressCircularCustomized from './progress-circular-customized';
import ProgressCircularCustomizedDocs from './progress-circular-customized/docs.mdx';

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
  title: 'Components/Feedback/Progress/Circular/Example',
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};

export const indeterminate = () => (
  <Wrapper>
    <ProgressCircularIndeterminate />
  </Wrapper>
);
indeterminate.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: ProgressCircularIndeterminateDocs,
    },
  },
};

export const determinate = () => (
  <Wrapper>
    <ProgressCircularDeterminate />
  </Wrapper>
);
determinate.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: ProgressCircularDeterminateDocs,
    },
  },
};

export const interactiveIntegration = () => (
  <Wrapper>
    <ProgressCircularInteractiveIntegration />
  </Wrapper>
);
interactiveIntegration.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: ProgressCircularInteractiveIntegrationDocs,
    },
  },
};

export const withLabel = () => (
  <Wrapper>
    <ProgressCircularWithLabel />
  </Wrapper>
);
withLabel.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: ProgressCircularWithLabelDocs,
    },
  },
};

export const customized = () => (
  <Wrapper>
    <ProgressCircularCustomized />
  </Wrapper>
);
customized.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: ProgressCircularCustomizedDocs,
    },
  },
};
