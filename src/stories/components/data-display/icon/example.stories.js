// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import IconQasir from './icon-qasir';
import IconQasirDocs from './icon-qasir/docs.mdx';

// import IconMaterialDesign from './icon-material-design';
// import IconMaterialDesignDocs from './icon-material-design/docs.mdx';

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
  title: 'Components/Data Display/Icons/Example',
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};

export const heading = () => (
  <Wrapper>
    <IconQasir />
  </Wrapper>
);
heading.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated
    docs: {
      page: IconQasirDocs,
    },
  },
};
