// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import Button from '../button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ButtonSizes = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" size="large">
        Large
      </Button>
      <Button variant="contained" color="primary">
        Medium
      </Button>
      <Button variant="contained" color="primary" size="small">
        Small
      </Button>
    </div>
  );
};

export default ButtonSizes;
