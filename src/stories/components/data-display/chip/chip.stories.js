// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import BadgeComponent from './badge';
import BadgeDocs from './badge/docs.mdx';

import 'font-family.css';

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
  title: 'Components/Data Display/chip/Example',
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
  },
};
export const Badge = () => (
  <Wrapper>
    <BadgeComponent />
  </Wrapper>
);

Badge.story = {
  parameters: {
    docs: {
      page: BadgeDocs,
    },
  },
};
