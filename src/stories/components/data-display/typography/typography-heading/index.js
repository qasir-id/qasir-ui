// Vendors
import React from 'react';

// Components
import Typography from 'components/data-display/Typography';

export const TypographyHeading1 = (props) => (
  <Typography variant="h1" {...props}>
    Heading 1
  </Typography>
);

export const TypographyHeading2 = (props) => (
  <Typography variant="h2" {...props}>
    Heading 2
  </Typography>
);

export const TypographyHeading3 = (props) => (
  <Typography variant="h3" {...props}>
    Heading 3
  </Typography>
);

export const TypographyHeading4 = (props) => (
  <Typography variant="h4" {...props}>
    Heading 4
  </Typography>
);

export const TypographyHeading5 = (props) => (
  <Typography variant="h5" {...props}>
    Heading 5
  </Typography>
);

const TypographyHeading = () => (
  <>
    {TypographyHeading1()}
    {TypographyHeading2()}
    {TypographyHeading3()}
    {TypographyHeading4()}
    {TypographyHeading5()}
  </>
);

export default TypographyHeading;
