// Vendors
import { createMuiTheme } from '@material-ui/core/styles';

// Styles
import MuiButtonStyled from './inputs/button/style';
import MuiSelectStyled from './inputs/select/style';

export const variables = {
  theme: '#F04B32',
};

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: variables.theme,
    },
    secondary: {
      main: '#E9EBEF',
    },
  },
  typography: {
    fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#fff', // 5d737e
      },
    },
    MuiButton: MuiButtonStyled(variables),
    MuiSelect: MuiSelectStyled(variables),
  },
});
export default theme;
