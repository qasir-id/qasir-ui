// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import Backdrop from 'components/feedback/Backdrop';
import CircularProgress from 'components/feedback/CircularProgress';
import Button from 'components/inputs/Button';
import BackdropDescriptionDocs from './description.docs.mdx';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: 1201,
    color: '#F04B32',
  },
}));

const Wrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default {
  title: 'Components/Feedback/Backdrop',
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};

export const description = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <Button variant="outlined" color="primary" onClick={handleToggle}>
        Show backdrop
      </Button>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Wrapper>
  );
};

description.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: BackdropDescriptionDocs,
    },
  },
};
