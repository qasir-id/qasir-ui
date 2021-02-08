// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

// Components
import Avatar from 'components/data-display/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

export const Avatar1 = () => <Avatar>H</Avatar>;
export const Avatar2 = () => {
  const classes = useStyles();
  return <Avatar className={classes.orange}>N</Avatar>;
};
export const Avatar3 = () => {
  const classes = useStyles();
  return <Avatar className={classes.purple}>OP</Avatar>;
};

const AvatarLetter = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {Avatar1()}
      {Avatar2()}
      {Avatar3()}
    </div>
  );
};

export default AvatarLetter;
