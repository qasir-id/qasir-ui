import colors from '../../variables/colors';
const MuiInputLabelStyled = (defaultTheme, modifyTheme) => ({
  root: {
    fontSize: 12,
    color: colors.black30,
  },
  outlined: {
    '&.MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px)',
    },
  },
});

export default MuiInputLabelStyled;
