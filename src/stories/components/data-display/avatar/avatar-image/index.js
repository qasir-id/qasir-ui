// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

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

export const Avatar1 = () => (
  <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
);
export const Avatar2 = () => (
  <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
);
export const Avatar3 = () => (
  <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
);

const AvatarImage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {Avatar1()}
      {Avatar2()}
      {Avatar3()}
    </div>
  );
};

export default AvatarImage;
