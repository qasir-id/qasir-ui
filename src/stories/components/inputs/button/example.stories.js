// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import ButtonTypes from './button-types';
import ButtonTypesDocs from './button-types/docs.mdx';

import ButtonContained from './button-contained';
import ButtonContainedDocs from './button-contained/docs.mdx';

import ButtonText from './button-text';
import ButtonTextDocs from './button-text/docs.mdx';

import ButtonOutlined from './button-outlined';
import ButtonOutlinedDocs from './button-outlined/docs.mdx';

import ButtonSizes from './button-sizes';
import ButtonSizesDocs from './button-sizes/docs.mdx';

import ButtonIconsLabel from './button-icons-label';
import ButtonIconsLabelDocs from './button-icons-label/docs.mdx';

import ButtonIcons from './button-icons';
import ButtonIconsDocs from './button-icons/docs.mdx';

import ButtonLoading from './button-loading';
import ButtonLoadingDocs from './button-loading/docs.mdx';

import ButtonCustomized from './button-customized';
import ButtonCustomizedDocs from './button-customized/docs.mdx';

import ButtonFullWidth from './button-full-width';
import ButtonFullWidthDocs from './button-full-width/docs.mdx';

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
  title: 'Components/Inputs/Button/Example',
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
  },
};

export const types = () => (
  <Wrapper>
    <ButtonTypes />
  </Wrapper>
);
types.story = {
  parameters: {
    docs: {
      page: ButtonTypesDocs,
    },
  },
};

export const contained = () => (
  <Wrapper>
    <ButtonContained />
  </Wrapper>
);
contained.story = {
  parameters: {
    docs: {
      page: ButtonContainedDocs,
    },
  },
};

export const text = () => (
  <Wrapper>
    <ButtonText />
  </Wrapper>
);
text.story = {
  parameters: {
    docs: {
      page: ButtonTextDocs,
    },
  },
};

export const outlined = () => (
  <Wrapper>
    <ButtonOutlined />
  </Wrapper>
);
outlined.story = {
  parameters: {
    docs: {
      page: ButtonOutlinedDocs,
    },
  },
};

export const sizes = () => (
  <Wrapper>
    <ButtonSizes />
  </Wrapper>
);
sizes.story = {
  parameters: {
    docs: {
      page: ButtonSizesDocs,
    },
  },
};

export const iconsLabel = () => (
  <Wrapper>
    <ButtonIconsLabel />
  </Wrapper>
);
iconsLabel.story = {
  name: 'With Icons & Label',
  parameters: {
    docs: {
      page: ButtonIconsLabelDocs,
    },
  },
};

// export const icons = () => (
//   <Wrapper>
//     <ButtonIcons />
//   </Wrapper>
// );
// icons.story = {
//   parameters: {
//     docs: {
//       page: ButtonIconsDocs,
//     },
//   },
// };

// export const loading = () => (
//   <Wrapper>
//     <ButtonLoading />
//   </Wrapper>
// );
// loading.story = {
//   parameters: {
//     docs: {
//       page: ButtonLoadingDocs,
//     },
//   },
// };

// export const customized = () => (
//   <Wrapper>
//     <ButtonCustomized />
//   </Wrapper>
// );
// customized.story = {
//   parameters: {
//     docs: {
//       page: ButtonCustomizedDocs,
//     },
//   },
// };

export const fullWidth = () => (
  <Wrapper>
    <ButtonFullWidth />
  </Wrapper>
);
fullWidth.story = {
  name: 'Full Width',
  parameters: {
    docs: {
      page: ButtonFullWidthDocs,
    },
  },
};
