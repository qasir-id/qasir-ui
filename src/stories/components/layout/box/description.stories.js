// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import Box from 'components/layout/Box';
import BoxDescriptionDocs from './description.docs.mdx';

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
  title: 'Components/Layout/Box',
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    type: {
      name: 'Style Functions',
      control: {
        type: 'select',
        options: [
          'borders',
          'display',
          'flexbox',
          'palette',
          'positions',
          'shadows',
          'sizing',
          'spacing',
          'typography',
        ],
      },
    },
  },
};

const defaultProps = {
  bgcolor: '#cfe8fc',
  m: 1,
  style: { width: '5rem', height: '5rem' },
  borderColor: 'text.primary',
};

export const description = ({ type }) => (
  <Wrapper>
    {type == 'borders' && (
      <>
        <Box display="flex" justifyContent="left">
          <Box border={1} {...defaultProps} />
          <Box borderTop={1} {...defaultProps} />
          <Box borderRight={1} {...defaultProps} />
          <Box borderBottom={1} {...defaultProps} />
          <Box borderLeft={1} {...defaultProps} />
        </Box>
      </>
    )}
  </Wrapper>
);

description.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated
    docs: {
      page: BoxDescriptionDocs,
    },
  },
};

description.args = {
  type: 'borders',
};
