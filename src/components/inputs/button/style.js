const MuiButtonStyled = (defaultTheme, modifyTheme) => ({
  root: {
    height: 36,
    textTransform: 'unset',
    borderRadius: 4,
  },
  label: {
    fontSize: 12,
    fontWeight: 500,
  },

  sizeSmall: {
    height: 28,
    fontSize: 12,
  },
  sizeLarge: {
    height: 48,
    '& .MuiButton-label': {
      fontSize: 14,
      fontWeight: 700,
    },
  },

  contained: {
    boxShadow: 'none',
    '&:hover,&:focus': {
      boxShadow: 'none',
    },
    '&:disabled': {
      backgroundColor: modifyTheme.palette.secondary.disabled,
      color: modifyTheme.palette.common.white,
    },
  },
  containedPrimary: {
    '&:hover': {
      backgroundColor: modifyTheme.palette.primary.hover,
    },
  },
  containedSecondary: {
    color: modifyTheme.palette.secondary.text,
    '&:hover': {
      backgroundColor: modifyTheme.palette.secondary.hover,
    },
  },

  outlined: {
    border: '1px solid #DADCE5',
    color: modifyTheme.palette.primary.text,
    '&:hover': {
      borderColor: modifyTheme.palette.primary.main,
      color: modifyTheme.palette.primary.main,
      backgroundColor: modifyTheme.palette.common.white,
    },
  },
});

export default MuiButtonStyled;
