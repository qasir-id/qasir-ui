// Vendors
import React from 'react';
import { withDesign } from 'storybook-addon-designs';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import ChipComponent from './chip';
import ChipDocs from './chip/docs.mdx';

import CustomChip from './custom-chip';
import CustomChipDocs from './custom-chip/docs.mdx';

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

export const Custom = () => (
  <Wrapper>
    <CustomChip />
  </Wrapper>
)

Custom.story = {
  parameters: {
    docs: {
      page: CustomChipDocs
    }
  }
}


Chip.story = {
  parameters: {
    docs: {
      page: ChipDocs,
    },
  },
};