// Vendors
import React from 'react';

// Components
import Typography from 'components/data-display/Typography';

export const TypographyCaption1 = (props) => (
  <Typography variant="caption" className="MuiTypography-caption1" {...props}>
    Caption 1
  </Typography>
);

export const TypographyCaption2 = (props) => (
  <Typography variant="caption" className="MuiTypography-caption2" {...props}>
    Caption 2
  </Typography>
);

const TypographyCaption = () => (
  <>
    {TypographyCaption1()}
    {TypographyCaption2()}
  </>
);

export default TypographyCaption;
