// Vendors
import { createMuiTheme } from '@material-ui/core/styles';

// Configs variables
import colors from './colors';

// Styles sections
// Data display
import MuiTypographyStyled from '../data-display/Typography/style';

// Inputs
import MuiButtonStyled from '../inputs/Button/style';
import MuiTextFieldStyled from '../inputs/TextField/style';

const defaultTheme = createMuiTheme();

// A custom theme for this app
export const modifyTheme = createMuiTheme({
  palette: {
    common: {
      black: colors.black90,
      white: colors.white,
    },
    primary: {
      main: colors.red50,
      hover: '#D8442D',
      text: colors.black90,
    },
    secondary: {
      main: colors.grey50,
      disabled: colors.grey70,
      text: colors.black90,
      hover: '#DCDDDF',
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
        backgroundColor: colors.white,
      },
    },
    MuiButton: MuiButtonStyled(defaultTheme, modifyTheme),
    MuiTypography: MuiTypographyStyled(defaultTheme, modifyTheme),
    MuiTextField: MuiTextFieldStyled(defaultTheme, modifyTheme),
  },
});

export default theme;
