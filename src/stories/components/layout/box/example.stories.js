// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import BoxBorders from './box-borders';
import BoxBordersDocs from './box-borders/docs.mdx';

import BoxDisplay from './box-display';
import BoxDisplayDocs from './box-display/docs.mdx';

import BoxFlexbox from './box-flexbox';
import BoxFlexboxDocs from './box-flexbox/docs.mdx';

import BoxPalette from './box-palette';
import BoxPaletteDocs from './box-palette/docs.mdx';

import BoxPositions from './box-positions';
import BoxPositionsDocs from './box-positions/docs.mdx';

import BoxShadows from './box-shadows';
import BoxShadowsDocs from './box-shadows/docs.mdx';

import BoxSizing from './box-sizing';
import BoxSizingDocs from './box-sizing/docs.mdx';

import BoxSpacing from './box-spacing';
import BoxSpacingDocs from './box-spacing/docs.mdx';

import BoxTypography from './box-typography';
import BoxTypographyDocs from './box-typography/docs.mdx';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Wrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default {
  title: 'Components/Layout/Box/Example',
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};

export const borders = () => (
  <Wrapper>
    <BoxBorders />
  </Wrapper>
);
borders.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: BoxBordersDocs,
    },
  },
};

export const display = () => (
  <Wrapper>
    <BoxDisplay />
  </Wrapper>
);
display.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: BoxDisplayDocs,
    },
  },
};

export const flexbox = () => (
  <Wrapper>
    <BoxFlexbox />
  </Wrapper>
);
flexbox.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: BoxFlexboxDocs,
    },
  },
};

export const palette = () => (
  <Wrapper>
    <BoxPalette />
  </Wrapper>
);
palette.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: BoxPaletteDocs,
    },
  },
};

export const positions = () => (
  <Wrapper>
    <BoxPositions />
  </Wrapper>
);
positions.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: BoxPositionsDocs,
    },
  },
};

export const shadows = () => (
  <Wrapper>
    <BoxShadows />
  </Wrapper>
);
shadows.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: BoxShadowsDocs,
    },
  },
};

export const sizing = () => (
  <Wrapper>
    <BoxSizing />
  </Wrapper>
);
sizing.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: BoxSizingDocs,
    },
  },
};

export const spacing = () => (
  <Wrapper>
    <BoxSpacing />
  </Wrapper>
);
spacing.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: BoxSpacingDocs,
    },
  },
};

export const typography = () => (
  <Wrapper>
    <BoxTypography />
  </Wrapper>
);
typography.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: BoxTypographyDocs,
    },
  },
};
