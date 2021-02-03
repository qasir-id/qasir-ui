// Vendors
import React from 'react';

// Material UI
import { withStyles } from '@material-ui/core/styles';

// Components
import LinearProgress from 'components/feedback/LinearProgress';
import colors from 'components/variables/colors';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: colors.red50,
  },
}))(LinearProgress);

const ProgressLinearCustomized = (props) => <BorderLinearProgress variant="determinate" value={50} />;

export default ProgressLinearCustomized;
