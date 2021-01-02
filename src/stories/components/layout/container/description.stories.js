// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import Container from 'components/layout/Container';
import ContainerDescriptionDocs from './description.docs.mdx';

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
  title: 'Components/Layout/Container',
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    type: {
      name: 'Type',
      control: {
        type: 'select',
        options: ['fluid', 'fixed'],
      },
    },
    size: {
      name: 'Size',
      control: {
        type: 'select',
        options: ['xl', 'lg', 'md', 'sm', 'xs'],
      },
    },
  },
};
export const description = ({ type, size }) => (
  <Wrapper>
    <Container fixed={type == 'fixed'} maxWidth={size}>
      <div style={{ backgroundColor: '#cfe8fc', height: '70vh' }}></div>
    </Container>
  </Wrapper>
);

description.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: ContainerDescriptionDocs,
    },
  },
};

description.args = {
  type: 'fluid',
  size: 'md',
};
