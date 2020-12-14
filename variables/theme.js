"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.modifyTheme = void 0;

var _styles = require("@material-ui/core/styles");

var _colors = _interopRequireDefault(require("../variables/colors"));

var _style = _interopRequireDefault(require("../inputs/button/style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultTheme = (0, _styles.createMuiTheme)(); // A custom theme for this app

var modifyTheme = (0, _styles.createMuiTheme)({
  palette: {
    common: {
      black: _colors.default.black90,
      white: _colors.default.white
    },
    primary: {
      main: _colors.default.red50,
      hover: '#D8442D',
      text: _colors.default.black90
    },
    secondary: {
      main: _colors.default.grey50,
      disabled: _colors.default.grey70,
      text: _colors.default.black90,
      hover: '#DCDDDF'
    }
  },
  typography: {
    fontFamily: ['"Montserrat"', 'sans-serif'].join(',')
  }
});
exports.modifyTheme = modifyTheme;
var theme = (0, _styles.createMuiTheme)(_objectSpread(_objectSpread({}, modifyTheme), {}, {
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: _colors.default.white
      }
    },
    MuiButton: (0, _style.default)(defaultTheme, modifyTheme)
  }
}));
var _default = theme;
exports.default = _default;