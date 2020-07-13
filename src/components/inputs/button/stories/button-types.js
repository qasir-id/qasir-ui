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

const ButtonTypes = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disable
      </Button>
      <Button variant="outlined">Outline</Button>
      <Button variant="text">Text</Button>
    </div>
  );
};

export default ButtonTypes;
