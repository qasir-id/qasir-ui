// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import BoxBorders from './box-borders';
import BoxBordersDocs from './box-borders/docs.mdx';

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
  title: 'Components/Layout/Box/Example',
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
  },
};

export const borders = () => (
  <Wrapper>
    <BoxBorders />
  </Wrapper>
);
borders.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated
    docs: {
      page: BoxBordersDocs,
    },
  },
};
