// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

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

import 'font-family.css';

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
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
  },
};

export const heading = () => (
  <Wrapper>
    <TypographyHeading />
  </Wrapper>
);
heading.story = {
  parameters: {
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
    docs: {
      page: TypographyOverlineDocs,
    },
  },
};