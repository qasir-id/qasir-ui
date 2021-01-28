// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import FormLabel from 'components/inputs/FormLabel';
import FormControl from 'components/inputs/FormControl';
import FormGroup from 'components/inputs/FormGroup';
import FormControlLabel from 'components/inputs/FormControlLabel';
import FormHelperText from 'components/inputs/FormHelperText';
import Checkbox from 'components/inputs/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}));

const CheckboxWithFormGroup = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl required error={error} component="fieldset">
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox color="primary" checked={gilad} onChange={handleChange} name="gilad" />}
            label="Gilad Gray"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={jason} onChange={handleChange} name="jason" />}
            label="Jason Killian"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={antoine} onChange={handleChange} name="antoine" />}
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    </div>
  );
};

export default CheckboxWithFormGroup;
