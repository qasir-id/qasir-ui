// Vendors
import { createMuiTheme } from '@material-ui/core/styles';

// Configs variables
import { colors } from './variables';

// Styles
import MuiButtonStyled from './inputs/button/style';
import MuiSelectStyled from './inputs/select/style';

const defaultTheme = createMuiTheme();

// A custom theme for this app
export const modifyTheme = createMuiTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      main: colors.red50,
    },
    secondary: {
      main: '#E9EBEF',
    },
  },
  typography: {
    fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
  },
});

const theme = createMuiTheme({
  ...modifyTheme,
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#fff', // 5d737e
      },
    },
    MuiButton: MuiButtonStyled(defaultTheme, modifyTheme),
    MuiSelect: MuiSelectStyled(defaultTheme, modifyTheme),
  },
});

export default theme;
