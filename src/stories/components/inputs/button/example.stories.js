// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import ButtonTypes from './button-types';
import ButtonTypesDocs from './button-types/docs.mdx';

import ButtonSizes from './button-sizes';
import ButtonSizesDocs from './button-sizes/docs.mdx';

import ButtonIconsLabel from './button-icons-label';
import ButtonIconsLabelDocs from './button-icons-label/docs.mdx';

import ButtonFullWidth from './button-full-width';
import ButtonFullWidthDocs from './button-full-width/docs.mdx';

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
  title: 'Components/Inputs/Button/Example',
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};

export const types = () => (
  <Wrapper>
    <ButtonTypes />
  </Wrapper>
);
types.story = {
  title: 'Type Buttons',
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: ButtonTypesDocs,
    },
  },
};

export const sizes = () => (
  <Wrapper>
    <ButtonSizes />
  </Wrapper>
);
sizes.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: ButtonSizesDocs,
    },
  },
};

export const iconsLabel = () => (
  <Wrapper>
    <ButtonIconsLabel />
  </Wrapper>
);
iconsLabel.story = {
  name: 'With Icons & Label',
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: ButtonIconsLabelDocs,
    },
  },
};

export const fullWidth = () => (
  <Wrapper>
    <ButtonFullWidth />
  </Wrapper>
);
fullWidth.story = {
  name: 'Full Width',
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: ButtonFullWidthDocs,
    },
  },
};
