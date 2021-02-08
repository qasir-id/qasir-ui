import colors from '../../variables/colors';
const MuiTextFieldStyled = (defaultTheme, modifyTheme) => ({
  root: {
    '& .MuiInputBase': {
      '&-root': {
        height: 48,
        '& legend': {
          fontSize: 12,
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
      '&-adornedStart': {
        '& input': {
          paddingLeft: 0,
        },
      },
      '&-adornedEnd': {
        '& input': {
          paddingRight: 0,
        },
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
          fontSize: 12,
          marginTop: 1,
        },
        '&.Mui-error': {
          color: colors.red50,
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
        '&.Mui-error': {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.red50,
          },
          '&.Muifocused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: colors.red50,
            },
          },
          '& input': {
            color: colors.red50,
          },
        },
      },
      '&-multiline': {
        padding: 14,
        '& .MuiInputBase-input': {
          height: 'auto',
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
    '& .MuiFormHelperText': {
      '&-root': {
        color: colors.black30,
        fontSize: 12,
        '&.Mui-error': {
          color: colors.red50,
        },
      },
    },
    '& .MuiSelect-select.MuiSelect-select': {
      paddingRight: 24,
      '&.MuiSelect-selectMenu': {
        height: 'auto',
      },
    },
    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
      transform: 'translate(14px, -6px)',
    },
  },
});

export default MuiTextFieldStyled;
