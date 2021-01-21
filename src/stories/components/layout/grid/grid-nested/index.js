// Vendors
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components
import Box from 'components/layout/Box';
import Grid from 'components/layout/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const defaultProps = {
  bgcolor: '#cfe8fc',
  p: 2,
  textAlign: 'center',
};

const GridNested = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <Box {...defaultProps}>item</Box>
          </Grid>
          <Grid item xs={4}>
            <Box {...defaultProps}>item</Box>
          </Grid>
          <Grid item xs={4}>
            <Box {...defaultProps}>item</Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default GridNested;
