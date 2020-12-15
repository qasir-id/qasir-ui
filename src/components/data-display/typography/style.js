const MuiTypographyStyled = (defaultTheme, modifyTheme) => ({
  root: {
    '&.MuiTypography-subtitle3': {
      fontWeight: 600,
      fontSize: 12,
      lineHeight: '16px',
    },
    '&.MuiTypography-caption1': {
      fontSize: 14,
    },
    '&.MuiTypography-caption2': {
      fontSize: 12,
    },
  },
  h1: {
    fontWeight: 600,
    fontSize: 28,
    lineHeight: '36px',
  },
  h2: {
    fontWeight: 400,
    fontSize: 24,
    lineHeight: '30px',
  },
  h3: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: '24px',
  },
  h4: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '24px',
  },
  h5: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: '24px',
  },
  subtitle1: {
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '16px',
  },
  subtitle2: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '18px',
  },
  body1: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: '18px',
  },
  body2: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: '18px',
  },
  caption: {
    fontWeight: 400,
    lineHeight: '18px',
  },
  overline: {
    fontWeight: 400,
    fontSize: 10,
    lineHeight: '12px',
  },
});

export default MuiTypographyStyled;
