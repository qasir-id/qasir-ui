const MuiButtonStyled = (defaultTheme, modifyTheme) => ({
  root: {
    height: 36,
    textTransform: 'unset',
    borderRadius: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: 600,
  },

  sizeSmall: {
    height: 28,
    fontSize: 12,
  },
  sizeLarge: {
    height: 48,
    fontSize: 14,
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

  outlined: {
    border: '1px solid #DADCE5',
    color: '#474955',
    '&:hover': {
      borderColor: modifyTheme.palette.primary.main,
      color: modifyTheme.palette.primary.main,
      backgroundColor: '#ffffff',
    },
  },
});

export default MuiButtonStyled;
