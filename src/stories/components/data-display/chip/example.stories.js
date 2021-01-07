// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import ChipComponent from './chip-types';
import ChipDocs from './chip-types/docs.mdx';

import CustomChip from './chip-custom';
import CustomChipDocs from './chip-custom/docs.mdx';

import ChipProps from './chip-props';
import OutlinedChipDocs from './chip-props/docs.mdx';

import ArrayChip from './chip-array';
import ArrayChipDocs from './chip-array/docs.mdx';

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
  title: 'Components/Data Display/Chip/Example',
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};
export const Types = () => (
  <Wrapper>
    <ChipComponent />
  </Wrapper>
);

export const chipProps = () => (
  <Wrapper>
    <ChipProps />
  </Wrapper>
);

export const Custom = () => (
  <Wrapper>
    <CustomChip />
  </Wrapper>
);

export const ChipArray = () => (
  <Wrapper>
    <ArrayChip />
  </Wrapper>
);

ChipArray.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated,
    docs: {
      page: ArrayChipDocs,
    },
  },
};

chipProps.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated,
    docs: {
      page: OutlinedChipDocs,
    },
  },
};

Custom.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated,
    docs: {
      page: CustomChipDocs,
    },
  },
};

Types.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated,
    docs: {
      page: ChipDocs,
    },
  },
};
