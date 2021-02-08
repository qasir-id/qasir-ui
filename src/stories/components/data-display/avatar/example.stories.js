// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import AvatarImage from './avatar-image';
import AvatarImageDocs from './avatar-image/docs.mdx';

import AvatarLetter from './avatar-letter';
import AvatarLetterDocs from './avatar-letter/docs.mdx';

import AvatarSize from './avatar-size';
import AvatarSizeDocs from './avatar-size/docs.mdx';

import AvatarIcon from './avatar-icon';
import AvatarIconDocs from './avatar-icon/docs.mdx';

import AvatarVariants from './avatar-variants';
import AvatarVariantsDocs from './avatar-variants/docs.mdx';

import AvatarFallbacks from './avatar-fallbacks';
import AvatarFallbacksDocs from './avatar-fallbacks/docs.mdx';

import AvatarGrouped from './avatar-grouped';
import AvatarGroupedDocs from './avatar-grouped/docs.mdx';

import AvatarWithBadge from './avatar-with-badge';
import AvatarWithBadgeDocs from './avatar-with-badge/docs.mdx';

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
  title: 'Components/Data Display/Avatar/Example',
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};

export const image = () => (
  <Wrapper>
    <AvatarImage />
  </Wrapper>
);
image.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: AvatarImageDocs,
    },
  },
};

export const letter = () => (
  <Wrapper>
    <AvatarLetter />
  </Wrapper>
);
letter.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: AvatarLetterDocs,
    },
  },
};

export const size = () => (
  <Wrapper>
    <AvatarSize />
  </Wrapper>
);
size.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: AvatarSizeDocs,
    },
  },
};

export const icon = () => (
  <Wrapper>
    <AvatarIcon />
  </Wrapper>
);
icon.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: AvatarIconDocs,
    },
  },
};

export const variants = () => (
  <Wrapper>
    <AvatarVariants />
  </Wrapper>
);
variants.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: AvatarVariantsDocs,
    },
  },
};

export const fallbacks = () => (
  <Wrapper>
    <AvatarFallbacks />
  </Wrapper>
);
fallbacks.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: AvatarFallbacksDocs,
    },
  },
};

export const grouped = () => (
  <Wrapper>
    <AvatarGrouped />
  </Wrapper>
);
grouped.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: AvatarGroupedDocs,
    },
  },
};

export const withBadge = () => (
  <Wrapper>
    <AvatarWithBadge />
  </Wrapper>
);
withBadge.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: AvatarWithBadgeDocs,
    },
  },
};
