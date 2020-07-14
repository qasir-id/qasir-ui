// Vendors
import React from 'react';
import { storiesOf } from '@storybook/react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
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

storiesOf('INPUTS|Button', module)
  .add('Types', () => (
    <Wrapper>
      <ButtonTypes />
    </Wrapper>
  ))
  .add('Contained', () => (
    <Wrapper>
      <ButtonContained />
    </Wrapper>
  ))
  .add('Text', () => (
    <Wrapper>
      <ButtonText />
    </Wrapper>
  ))
  .add('Outlined', () => (
    <Wrapper>
      <ButtonOutlined />
    </Wrapper>
  ))
  .add('Sizes', () => (
    <Wrapper>
      <ButtonSizes />
    </Wrapper>
  ))
  .add('With Icons & Label', () => (
    <Wrapper>
      <ButtonIconsLabel />
    </Wrapper>
  ))
  .add('Icons', () => (
    <Wrapper>
      <ButtonIcons />
    </Wrapper>
  ))
  .add('Loading', () => (
    <Wrapper>
      <ButtonLoading />
    </Wrapper>
  ))
  .add('Customize', () => (
    <Wrapper>
      <ButtonCustomized />
    </Wrapper>
  ));
