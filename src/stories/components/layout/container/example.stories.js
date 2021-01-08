// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import ContainerTypes from './container-types';
import ContainerTypesDocs from './container-types/docs.mdx';

import ContainerSizes from './container-sizes';
import ContainerSizesDocs from './container-sizes/docs.mdx';

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
  title: 'Components/Layout/Container/Example',
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};

export const types = () => (
  <Wrapper>
    <ContainerTypes />
  </Wrapper>
);
types.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: ContainerTypesDocs,
    },
  },
};

export const sizes = () => (
  <Wrapper>
    <ContainerSizes />
  </Wrapper>
);
sizes.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: ContainerSizesDocs,
    },
  },
};
