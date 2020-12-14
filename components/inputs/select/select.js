"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _theme = _interopRequireDefault(require("../../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Vendors
// Material UI
var _default = function _default(props) {
  var children = props.children;
  return /*#__PURE__*/_react.default.createElement(_styles.ThemeProvider, {
    theme: _theme.default
  }, /*#__PURE__*/_react.default.createElement(_Select.default, props, children));
};

exports.default = _default;