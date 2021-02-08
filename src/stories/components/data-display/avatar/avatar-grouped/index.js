// Vendors
import React from 'react';

// Components
import Avatar from 'components/data-display/Avatar';
import AvatarGroup from 'components/data-display/AvatarGroup';

const AvatarGrouped = () => (
  <AvatarGroup max={4}>
    <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
    <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
    <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
  </AvatarGroup>
);

export default AvatarGrouped;
