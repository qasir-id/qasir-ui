import colors from '../../variables/colors';
const MuiTextFieldStyled = (defaultTheme, modifyTheme) => ({
  root: {
    '& .MuiInputBase': {
      '&-root': {
        height: 48,
        '& fieldset': {
          top: '-7px',
        },
        '& legend': {
          fontSize: 9,
        },
      },
      '&-input': {
        padding: '0 16px',
        height: 48,
        fontSize: 12,
        color: colors.black90,
        fontWeight: 500,
      },
      '&-multiline': {
        height: 'auto',
      },
      '&-inputMultiline': {
        padding: 0,
      },
    },
    '& .MuiFormLabel': {
      '&-root': {
        color: colors.black30,
        fontSize: 12,
        fontWeight: 500,
        marginTop: '-1px',
      },
    },
  },
});

export default MuiTextFieldStyled;
