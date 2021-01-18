// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import IconQasir from './icon-qasir';
import IconQasirDocs from './icon-qasir/docs.mdx';

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

export const qasir = () => (
  <Wrapper>
    <IconQasir />
  </Wrapper>
);
qasir.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    docs: {
      page: IconQasirDocs,
    },
  },
};

export const materialDesign = () => {
  window.open('https://material-ui.com/components/material-icons', '_blank');
  return (
    <Wrapper>
      <h3>
        Please check on{' '}
        <a className="link" target="_blank" href="https://material-ui.com/components/material-icons">
          https://material-ui.com/components/material-icons
        </a>
      </h3>
    </Wrapper>
  );
};
materialDesign.story = {
  parameters: {
    status: 'Stable', // Stable | Development | Deprecated
    fullPage: true,
    previewTabs: {
      canvas: { hidden: true },
    },
  },
};
