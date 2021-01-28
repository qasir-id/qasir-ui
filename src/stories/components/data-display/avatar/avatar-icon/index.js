// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

// Components
import Avatar from 'components/data-display/Avatar';
import IconDashboard from 'components/data-display/Icon/IconDashboard';
import IconReport from 'components/data-display/Icon/IconReport';
import IconTransaction from 'components/data-display/Icon/IconTransaction';

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

export const Avatar1 = () => (
  <Avatar>
    <IconDashboard htmlColor="#fff" />
  </Avatar>
);
export const Avatar2 = () => {
  const classes = useStyles();
  return (
    <Avatar className={classes.orange}>
      <IconReport htmlColor="#fff" />
    </Avatar>
  );
};
export const Avatar3 = () => {
  const classes = useStyles();
  return (
    <Avatar className={classes.purple}>
      <IconTransaction htmlColor="#fff" />
    </Avatar>
  );
};

const AvatarIcon = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {Avatar1()}
      {Avatar2()}
      {Avatar3()}
    </div>
  );
};

export default AvatarIcon;
