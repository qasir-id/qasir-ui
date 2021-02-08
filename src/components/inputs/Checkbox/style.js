const MuiCheckboxStyled = (defaultTheme, modifyTheme) => ({
  root: {
    '& + .MuiTypography-root': {
      fontFamily: `${modifyTheme.typography.fontFamily} !important`,
      fontSize: 14,
      fontWeight: 500,
    },
  },
});

export default MuiCheckboxStyled;
