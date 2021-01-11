// Vendors
import { createMuiTheme } from '@material-ui/core/styles';

// Configs variables
import colors from './colors';

// Styles sections
// Layout
import MuiContainerStyled from '../layout/Container/style';

// Inputs
import MuiButtonStyled from '../inputs/Button/style';
import MuiTextFieldStyled from '../inputs/TextField/style';
import MuiSelectStyled from '../inputs/Select/style';
import MuiInputLabelStyled from '../inputs/InputLabel/style';

// Navigation
import MuiTabsStyled from '../navigation/Tabs/style';
import MuiTabStyled from '../navigation/Tab/style';

// Data display
import MuiTypographyStyled from '../data-display/Typography/style';
import MuiChipStyled from '../data-display/Chip/style';
import MuiIconsStyled from '../data-display/Icons/style';

// Lab
import MuiPaginationStyled from '../lab/Pagination/style';
import MuiTablePaginationStyled from '../lab/TablePagination/style';

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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const theme = createMuiTheme({
  ...modifyTheme,
  overrides: {
    // Layout
    MuiContainer: MuiContainerStyled(defaultTheme, modifyTheme),

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
    MuiTab: MuiTabStyled(defaultTheme, modifyTheme),

    // Data display
    MuiTypography: MuiTypographyStyled(defaultTheme, modifyTheme),
    MuiChip: MuiChipStyled(defaultTheme, modifyTheme),

    // Lab
    MuiPagination: MuiPaginationStyled(defaultTheme, modifyTheme),
    MuiTablePagination: MuiTablePaginationStyled(defaultTheme, modifyTheme),
    
    // Icon
    MuiSvgIcon: MuiIconsStyled(defaultTheme, modifyTheme),

  },
});

export default theme;
