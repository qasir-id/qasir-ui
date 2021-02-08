// Vendors
import React from 'react';

// Components
import Typography from 'components/data-display/Typography';

export const TypographySubtitle1 = (props) => (
  <Typography variant="subtitle1" {...props}>
    Subtitle 1
  </Typography>
);

export const TypographySubtitle2 = (props) => (
  <Typography variant="subtitle2" {...props}>
    Subtitle 2
  </Typography>
);

export const TypographySubtitle3 = (props) => (
  <Typography className="MuiTypography-subtitle3" component="h6" {...props}>
    Subtitle 3
  </Typography>
);

const TypographySubtitle = () => (
  <>
    {TypographySubtitle1()}
    {TypographySubtitle2()}
    {TypographySubtitle3()}
  </>
);

export default TypographySubtitle;
