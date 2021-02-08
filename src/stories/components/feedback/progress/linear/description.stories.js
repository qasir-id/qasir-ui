// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import ProgressLinearIndeterminate from './progress-linear-indeterminate';
import ProgressLinearDeterminate from './progress-linear-determinate';
import ProgressLinearBuffer from './progress-linear-buffer';
import ProgressLinearWithLabel from './progress-linear-with-label';
import ProgressLinearCustomized from './progress-linear-customized';

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
  title: 'Components/Feedback/Progress/Linear',
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    type: {
      name: 'Example',
      control: {
        type: 'select',
        options: ['indeterminate', 'determinate', 'buffer', 'with label', 'customized'],
      },
    },
  },
};

export const description = ({ type }) => (
  <Wrapper>
    {type == 'indeterminate' && <ProgressLinearIndeterminate />}
    {type == 'determinate' && <ProgressLinearDeterminate />}
    {type == 'buffer' && <ProgressLinearBuffer />}
    {type == 'with label' && <ProgressLinearWithLabel />}
    {type == 'customized' && <ProgressLinearCustomized />}
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
