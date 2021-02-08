// Vendors
import React from 'react';
import { Source } from '@storybook/addon-docs/blocks';
import dedent from 'ts-dedent';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

// Components
import Box from 'components/layout/Box';

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
  p: 2,
  m: 1,
  height: '100%',
  textAlign: 'center',
};

const GridInteractive = () => {
  const [direction, setDirection] = React.useState('row');
  const [justify, setJustify] = React.useState('flex-start');
  const [alignItems, setAlignItems] = React.useState('flex-start');
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container direction={direction} justify={justify} alignItems={alignItems}>
          <Grid item>
            <Box {...defaultProps} style={{ paddingTop: 10, paddingBottom: 10 }}>
              Cell 1
            </Box>
          </Grid>
          <Grid item>
            <Box {...defaultProps} style={{ paddingTop: 20, paddingBottom: 20 }}>
              Cell 2
            </Box>
          </Grid>
          <Grid item>
            <Box {...defaultProps} style={{ paddingTop: 30, paddingBottom: 30 }}>
              Cell 3
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <div className={classes.control}>
          <Grid container>
            <Grid item>
              <FormLabel>direction</FormLabel>
              <RadioGroup
                name="direction"
                aria-label="direction"
                value={direction}
                onChange={(event) => setDirection(event.target.value)}
                row
              >
                {['row', 'row-reverse', 'column', 'column-reverse'].map((value) => (
                  <FormControlLabel key={value} value={value} control={<Radio />} label={value} />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: 20 }}>
            <Grid item>
              <FormLabel>justify</FormLabel>
              <RadioGroup
                name="justify"
                aria-label="justify"
                value={justify}
                onChange={(event) => setJustify(event.target.value)}
                row
              >
                {['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'].map(
                  (value) => (
                    <FormControlLabel key={value} value={value} control={<Radio />} label={value} />
                  )
                )}
              </RadioGroup>
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: 20 }}>
            <Grid item>
              <FormLabel>alignItems</FormLabel>
              <RadioGroup
                name="alignItems"
                aria-label="alignItems"
                value={alignItems}
                onChange={(event) => setAlignItems(event.target.value)}
                row
              >
                {['flex-start', 'center', 'flex-end', 'stretch', 'baseline'].map((value) => (
                  <FormControlLabel key={value} value={value} control={<Radio />} label={value} />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>

          <Grid container style={{ marginTop: 20 }}>
            <Grid item>
              <Source
                language="jsx"
                code={dedent`
                <Grid
                container
                direction="${direction}"
                justify="${justify}"
                alignItems="${alignItems}"
              >
  `}
              />
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default GridInteractive;
