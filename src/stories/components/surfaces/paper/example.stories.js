// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import PaperBasic from './paper-basic';
import PaperBasicDocs from './paper-basic/docs.mdx';

import PaperVariants from './paper-variants';
import PaperVariantsDocs from './paper-variants/docs.mdx';

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
  title: 'Components/Surfaces/Paper/Example',
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};

export const basic = () => (
  <Wrapper>
    <PaperBasic />
  </Wrapper>
);
basic.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: PaperBasicDocs,
    },
  },
};

export const variants = () => (
  <Wrapper>
    <PaperVariants />
  </Wrapper>
);
variants.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: PaperVariantsDocs,
    },
  },
};
