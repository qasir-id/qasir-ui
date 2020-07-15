// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import Docs from './button.mdx';
import ButtonTypes from './button-types';
import ButtonContained from './button-contained';
import ButtonText from './button-text';
import ButtonOutlined from './button-outlined';
import ButtonSizes from './button-sizes';
import ButtonIconsLabel from './button-icons-label';
import ButtonIcons from './button-icons';
import ButtonLoading from './button-loading';
import ButtonCustomized from './button-customized';

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
    docs: {
      page: Docs,
    },
    design: { disabled: true },
  },
};

export const types = () => (
  <Wrapper>
    <ButtonTypes />
  </Wrapper>
);

export const contained = () => (
  <Wrapper>
    <ButtonContained />
  </Wrapper>
);

export const text = () => (
  <Wrapper>
    <ButtonText />
  </Wrapper>
);

export const outlined = () => (
  <Wrapper>
    <ButtonOutlined />
  </Wrapper>
);

export const sizes = () => (
  <Wrapper>
    <ButtonSizes />
  </Wrapper>
);

export const iconsLabel = () => (
  <Wrapper>
    <ButtonIconsLabel />
  </Wrapper>
);

iconsLabel.story = {
  name: 'With Icons & Label',
  parameters: {
    type: 'button-icons-label',
  },
};

export const icons = () => (
  <Wrapper>
    <ButtonIcons />
  </Wrapper>
);

export const loading = () => (
  <Wrapper>
    <ButtonLoading />
  </Wrapper>
);

export const customized = () => (
  <Wrapper>
    <ButtonCustomized />
  </Wrapper>
);
