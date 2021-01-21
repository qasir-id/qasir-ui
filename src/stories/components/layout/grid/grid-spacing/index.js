// Vendors
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

// Components
import Box from 'components/layout/Box';
import Grid from 'components/layout/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    marginTop: 10,
  },
}));

const defaultProps = {
  bgcolor: '#cfe8fc',
  height: 200,
  width: 100,
};

const GridSpacing = () => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="left" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Box {...defaultProps} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.control}>
          <Grid container>
            <Grid item>
              <FormLabel>spacing</FormLabel>
              <RadioGroup
                name="spacing"
                aria-label="spacing"
                value={spacing.toString()}
                onChange={handleChange}
                row
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <FormControlLabel
                    key={value}
                    value={value.toString()}
                    control={<Radio />}
                    label={value.toString()}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default GridSpacing;
