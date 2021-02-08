// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import Paper from 'components/surfaces/Paper';
import PaperDescriptionDocs from './description.docs.mdx';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    margin: theme.spacing(1),
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
}));

const Wrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default {
  title: 'Components/Surfaces/Paper',
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    elevation: {
      name: 'Elevations',
      control: {
        type: 'select',
        options: [...Array(25).keys()],
      },
    },
    variant: {
      name: 'Variants',
      control: {
        type: 'select',
        options: ['elevation', 'outlined'],
      },
    },
    square: {
      name: 'Square',
      control: {
        type: 'boolean',
      },
    },
  },
};

export const description = ({ elevation, variant, square }) => {
  const classes = useStyles();
  return (
    <Wrapper>
      <Paper className={classes.paper} elevation={elevation} variant={variant} square={square} />
    </Wrapper>
  );
};

description.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: PaperDescriptionDocs,
    },
  },
};

description.args = {
  elevation: 1,
  variant: 'elevation',
  square: false,
};
