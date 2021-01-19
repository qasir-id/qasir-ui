// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import Box from 'components/layout/Box';
import BoxDescriptionDocs from './description.docs.mdx';

import BoxBorders from './box-borders';
import BoxDisplay from './box-display';
import BoxFlexbox from './box-flexbox';
import BoxPalette from './box-palette';
import BoxPositions from './box-positions';
import BoxShadows from './box-shadows';
import BoxSizing from './box-sizing';
import BoxSpacing from './box-spacing';
import BoxTypography from './box-typography';

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
  title: 'Components/Layout/Box',
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    type: {
      name: 'Style Functions',
      control: {
        type: 'select',
        options: [
          'borders',
          'display',
          'flexbox',
          'palette',
          'positions',
          'shadows',
          'sizing',
          'spacing',
          'typography',
        ],
      },
    },
  },
};

const defaultProps = {
  bgcolor: '#cfe8fc',
  m: 1,
  style: { width: '5rem', height: '5rem' },
  borderColor: 'text.primary',
};

export const description = ({ type }) => (
  <Wrapper>
    {type == 'borders' && <BoxBorders />}
    {type == 'display' && <BoxDisplay />}
    {type == 'flexbox' && <BoxFlexbox />}
    {type == 'palette' && <BoxPalette />}
    {type == 'positions' && <BoxPositions />}
    {type == 'shadows' && <BoxShadows />}
    {type == 'sizing' && <BoxSizing />}
    {type == 'spacing' && <BoxSpacing />}
    {type == 'typography' && <BoxTypography />}
  </Wrapper>
);

description.story = {
  parameters: {
    status: 'Development', // Stable | Development | Deprecated
    docs: {
      page: BoxDescriptionDocs,
    },
  },
};

description.args = {
  type: 'borders',
};
