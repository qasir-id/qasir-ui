// Vendors
import React from 'react';

// Components
import Typography from 'components/data-display/Typography';

export const TypographyBody1 = (props) => (
  <Typography variant="body1" {...props}>
    Body 1
  </Typography>
);

export const TypographyBody2 = (props) => (
  <Typography variant="body2" {...props}>
    Body 2
  </Typography>
);

const TypographyBody = () => (
  <>
    {TypographyBody1()}
    {TypographyBody2()}
  </>
);

export default TypographyBody;
