// Vendors
import React from 'react';

// Components
import Typography from 'components/data-display/typography';

const TypographySubtitle = () => {
  return (
    <>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography className="MuiTypography-subtitle3" component="h6">
        Subtitle 3
      </Typography>
    </>
  );
};

export default TypographySubtitle;
