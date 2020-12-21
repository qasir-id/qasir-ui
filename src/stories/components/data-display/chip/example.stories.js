// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import ChipComponent from './chip';
import ChipDocs from './chip/docs.mdx';

import CustomChip from './chip-custom';
import CustomChipDocs from './chip-custom/docs.mdx';

import OutlinedChip from './chip-outlined';
import OutlinedChipDocs from './chip-outlined/docs.mdx';

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
  decorators: [withDesign],
  parameters: {
    design: { disabled: true },
  },
};
export const Chip = () => (
  <Wrapper>
    <ChipComponent />
  </Wrapper>
);

export const Outlined = () => (
    <Wrapper>
        <OutlinedChip/>
    </Wrapper>
)

export const Custom = () => (
  <Wrapper>
    <CustomChip />
  </Wrapper>
);

export const ChipArray = () => (
    <Wrapper>
      <ArrayChip/>
    </Wrapper>
)



ChipArray.story = {
    parameters: {
        status: 'Development', // Stable | Development | Deprecated,
        docs: {
            page: ArrayChipDocs
        }
    }
}

Outlined.story = {
    parameters: {
        status: 'Development', // Stable | Development | Deprecated,
        docs: {
            page: OutlinedChipDocs
        }
    }
}

Custom.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated,
    docs: {
      page: CustomChipDocs
    }
  }
}


Chip.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated,
    docs: {
      page: ChipDocs,
    },
  },
};