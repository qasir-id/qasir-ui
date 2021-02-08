// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

// Components
import Avatar from 'components/data-display/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const Avatar1 = () => {
  const classes = useStyles();
  return (
    <Avatar alt="Remy Sharp" src="/broken-image.jpg">
      B
    </Avatar>
  );
};
export const Avatar2 = () => {
  const classes = useStyles();
  return <Avatar alt="Remy Sharp" src="/broken-image.jpg" />;
};
export const Avatar3 = () => <Avatar src="/broken-image.jpg" />;

const AvatarFallbacks = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {Avatar1()}
      {Avatar2()}
      {Avatar3()}
    </div>
  );
};

export default AvatarFallbacks;
