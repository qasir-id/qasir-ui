// Vendors
import { createMuiTheme } from '@material-ui/core/styles';

// Configs variables
import colors from './colors';

// Styles sections
// Inputs
import MuiButtonStyled from '../inputs/Button/style';
import MuiTextFieldStyled from '../inputs/TextField/style';
import MuiSelectStyled from '../inputs/Select/style';
import MuiInputLabelStyled from '../inputs/InputLabel/style';

// Navigation
import MuiTabsStyled from '../navigation/Tabs/style';

// Data display
import MuiTypographyStyled from '../data-display/Typography/style';
import MuiChipStyled from '../data-display/Chip/style';

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
    // Inputs
    MuiInputLabel: MuiInputLabelStyled(defaultTheme, modifyTheme),
    MuiOutlinedInput: {
      root: {
        '&:hover': {
          notchedOutline: {
            borderColor: colors.grey70,
          },
        },
      },
      notchedOutline: {
        borderColor: colors.grey70,
      },
    },
    MuiButton: MuiButtonStyled(defaultTheme, modifyTheme),
    MuiTextField: MuiTextFieldStyled(defaultTheme, modifyTheme),
    MuiSelect: MuiSelectStyled(defaultTheme, modifyTheme),

    // Navigation
    MuiTabs: MuiTabsStyled(defaultTheme, modifyTheme),

    // Data display
    MuiTypography: MuiTypographyStyled(defaultTheme, modifyTheme),
    MuiChip: MuiChipStyled(defaultTheme, modifyTheme),
  },
});

export default theme;
