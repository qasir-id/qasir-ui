import colors from '../../variables/colors';
const MuiTextFieldStyled = (defaultTheme, modifyTheme) => ({
  root: {
    '& .MuiInputBase': {
      '&-root': {
        height: 48,
        '& legend': {
          fontSize: '10.5px',
        },
        '&.Mui-disabled': {
          backgroundColor: colors.grey50,
          '& .MuiInputBase-input': {
            color: colors.black30,
          },
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
    '& label': {
      '&.Mui-focused': {
        color: colors.black30,
        fontSize: 15,
      },
    },
    '& .MuiFormLabel': {
      '&-root': {
        color: colors.black30,
        fontSize: 12,
        fontWeight: 500,
        marginTop: '-1px',
        '&.MuiInputLabel-shrink': {
          fontSize: 14,
          marginTop: 1,
        },
      },
    },
    '& .MuiOutlinedInput': {
      '&-root': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.grey70,
        },
        '&.Muifocused': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.grey70,
          },
        },
      },
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: colors.red50,
    },
    '&:hover': {
      '.MuiOutlinedInput-root': {
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: colors.grey70,
        },
      },
    },
  },
});

export default MuiTextFieldStyled;
