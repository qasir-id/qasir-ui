"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var MuiButtonStyled = function MuiButtonStyled(defaultTheme, modifyTheme) {
  return {
    root: {
      height: 36,
      textTransform: 'unset',
      borderRadius: 4
    },
    label: {
      fontSize: 12,
      fontWeight: 600
    },
    sizeSmall: {
      height: 28,
      fontSize: 12
    },
    sizeLarge: {
      height: 48,
      fontSize: 14
    },
    contained: {
      boxShadow: 'none',
      '&:hover,&:focus': {
        boxShadow: 'none'
      },
      '&:disabled': {
        backgroundColor: modifyTheme.palette.secondary.disabled,
        color: modifyTheme.palette.common.white
      }
    },
    containedPrimary: {
      '&:hover': {
        backgroundColor: modifyTheme.palette.primary.hover
      }
    },
    containedSecondary: {
      color: modifyTheme.palette.secondary.text,
      '&:hover': {
        backgroundColor: modifyTheme.palette.secondary.hover
      }
    },
    outlined: {
      border: '1px solid #DADCE5',
      color: modifyTheme.palette.primary.text,
      '&:hover': {
        borderColor: modifyTheme.palette.primary.main,
        color: modifyTheme.palette.primary.main,
        backgroundColor: modifyTheme.palette.common.white
      }
    }
  };
};

var _default = MuiButtonStyled;
exports.default = _default;