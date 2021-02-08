// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import ProgressCircularIndeterminate from './progress-circular-indeterminate';
import ProgressCircularDeterminate from './progress-circular-determinate';
import ProgressCircularInteractiveIntegration from './progress-circular-interactive-integration';
import ProgressCircularWithLabel from './progress-circular-with-label';
import ProgressCircularCustomized from './progress-circular-customized';

import ProgressDescriptionDocs from './description.docs.mdx';

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
  title: 'Components/Feedback/Progress/Circular',
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    type: {
      name: 'Example',
      control: {
        type: 'select',
        options: ['indeterminate', 'determinate', 'interactive integration', 'with label', 'customized'],
      },
    },
  },
};

export const description = ({ type }) => (
  <Wrapper>
    {type == 'indeterminate' && <ProgressCircularIndeterminate />}
    {type == 'determinate' && <ProgressCircularDeterminate />}
    {type == 'interactive integration' && <ProgressCircularInteractiveIntegration />}
    {type == 'with label' && <ProgressCircularWithLabel />}
    {type == 'customized' && <ProgressCircularCustomized />}
  </Wrapper>
);

description.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: ProgressDescriptionDocs,
    },
  },
};

description.args = {
  type: 'indeterminate',
};
