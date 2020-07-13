const MuiButtonStyled = ({ theme }) => ({
  root: {
    height: 36,
    textTransform: 'unset',
    fontSize: 12,
    borderRadius: 4,
  },
  sizeSmall: {
    height: 28,
  },
  sizeLarge: {
    height: 48,
  },
  contained: {
    boxShadow: 'none',
    '&:hover,&:focus': {
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: '#DADCE5',
      color: '#ffffff',
    },
  },
  outlined: {
    border: '1px solid #DADCE5',
    color: '#474955',
    '&:hover': {
      borderColor: theme,
      color: theme,
      backgroundColor: '#ffffff',
    },
  },
  containedPrimary: {
    '&:hover': {
      backgroundColor: '#D8442D',
    },
  },
  containedSecondary: {
    color: '#474955',
    '&:hover': {
      backgroundColor: '#DCDDDF',
    },
  },
});

export default MuiButtonStyled;
