// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

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
  title: 'Components/Inputs/Button/Example',
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
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
    options: { showPanel: false },
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
    options: { showPanel: false },
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
    options: { showPanel: false },
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
    options: { showPanel: false },
  },
};
