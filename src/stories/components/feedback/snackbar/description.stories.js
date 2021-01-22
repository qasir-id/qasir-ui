// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import SnackbarSimple from './snackbar-simple';
import SnackbarCustomized from './snackbar-customized';
import SnackbarPositioned from './snackbar-positioned';
import SnackbarConsecutive from './snackbar-consecutive';
import SnackbarTransition from './snackbar-transition';
import SnackbarSlideDirection from './snackbar-slide-direction';
import SnackbarDescriptionDocs from './description.docs.mdx';

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
  title: 'Components/Feedback/Snackbar',
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    type: {
      name: 'Example',
      control: {
        type: 'select',
        options: ['simple', 'customized', 'positioned', 'consecutive', 'transition', 'slide direction'],
      },
    },
  },
};

export const description = ({ type }) => (
  <Wrapper>
    {type == 'simple' && <SnackbarSimple />}
    {type == 'customized' && <SnackbarCustomized />}
    {type == 'positioned' && <SnackbarPositioned />}
    {type == 'consecutive' && <SnackbarConsecutive />}
    {type == 'transition' && <SnackbarTransition />}
    {type == 'slide direction' && <SnackbarSlideDirection />}
  </Wrapper>
);

description.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: SnackbarDescriptionDocs,
    },
  },
};

description.args = {
  type: 'simple',
};
