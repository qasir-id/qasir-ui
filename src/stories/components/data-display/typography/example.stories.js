// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import TypographyHeading from './typography-heading';
import TypographyHeadingDocs from './typography-heading/docs.mdx';

import TypographySubtitle from './typography-subtitle';
import TypographySubtitleDocs from './typography-subtitle/docs.mdx';

import TypographyBody from './typography-body';
import TypographyBodyDocs from './typography-body/docs.mdx';

import TypographyCaption from './typography-caption';
import TypographyCaptionDocs from './typography-caption/docs.mdx';

import TypographyOverline from './typography-overline';
import TypographyOverlineDocs from './typography-overline/docs.mdx';

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
  title: 'Components/Data Display/Typography/Example',
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};

export const heading = () => (
  <Wrapper>
    <TypographyHeading />
  </Wrapper>
);
heading.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: TypographyHeadingDocs,
    },
  },
};

export const subtitle = () => (
  <Wrapper>
    <TypographySubtitle />
  </Wrapper>
);
subtitle.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: TypographySubtitleDocs,
    },
  },
};

export const body = () => (
  <Wrapper>
    <TypographyBody />
  </Wrapper>
);
body.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: TypographyBodyDocs,
    },
  },
};

export const caption = () => (
  <Wrapper>
    <TypographyCaption />
  </Wrapper>
);
caption.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: TypographyCaptionDocs,
    },
  },
};

export const overline = () => (
  <Wrapper>
    <TypographyOverline />
  </Wrapper>
);
overline.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: TypographyOverlineDocs,
    },
  },
};
