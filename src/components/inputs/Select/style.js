import colors from '../../variables/colors';
const MuiSelectStyled = (defaultTheme, modifyTheme) => ({
  root: {
    '&.MuiOutlinedInput-input': {
      padding: '14.5px 14px',
      fontSize: 12,
    },
    '&.MuiSelectNative': {
      padding: '16.89px 14px',
      lineHeight: '12px',
    },
  },
});

export default MuiSelectStyled;
