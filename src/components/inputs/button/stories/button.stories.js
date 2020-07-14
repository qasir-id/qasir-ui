import React from 'react';
import { config, withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

import Button from '../index';
import Docs from './button.mdx';
import ButtonTypes from './button-types';

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
  title: 'Components/Inputs/Button',
  decorators: [withDesign],
  parameters: {
    docs: {
      page: Docs,
    },
  },
};

export const types = () => (
  <Wrapper>
    <ButtonTypes />
  </Wrapper>
);

types.story = {
  parameters: {
    design: config({
      type: 'iframe',
      url: 'https://material-ui.com/api/button/',
    }),
  },
};
