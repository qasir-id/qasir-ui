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

const GridFluidBasic = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box {...defaultProps}>xs=12</Box>
        </Grid>
        <Grid item xs={6}>
          <Box {...defaultProps}>xs=6</Box>
        </Grid>
        <Grid item xs={6}>
          <Box {...defaultProps}>xs=6</Box>
        </Grid>
        <Grid item xs={3}>
          <Box {...defaultProps}>xs=3</Box>
        </Grid>
        <Grid item xs={3}>
          <Box {...defaultProps}>xs=3</Box>
        </Grid>
        <Grid item xs={3}>
          <Box {...defaultProps}>xs=3</Box>
        </Grid>
        <Grid item xs={3}>
          <Box {...defaultProps}>xs=3</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default GridFluidBasic;
