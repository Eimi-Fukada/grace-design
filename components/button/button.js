function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import classNames from 'classnames';
import React from 'react';
import { withNativeProps } from "../../../src/utils/native-props";
var classPrefix = "gd-button";
export var Button = function Button(props) {
  var _props$disabled, _classNames;
  var _props$color = props.color,
    color = _props$color === void 0 ? 'default' : _props$color,
    _props$block = props.block,
    block = _props$block === void 0 ? false : _props$block,
    _props$loading = props.loading,
    loading = _props$loading === void 0 ? false : _props$loading,
    _props$type = props.type,
    type = _props$type === void 0 ? 'button' : _props$type;
  var disabled = (_props$disabled = props.disabled) !== null && _props$disabled !== void 0 ? _props$disabled : props.loading;
  return withNativeProps(props, /*#__PURE__*/React.createElement("button", {
    style: props.style,
    type: type,
    onClick: props.onClick,
    className: classNames(props.className, classPrefix, color ? "".concat(classPrefix, "-").concat(color) : null, (_classNames = {}, _defineProperty(_classNames, "".concat(classPrefix, "-block"), block), _defineProperty(_classNames, "".concat(classPrefix, "-disabled"), disabled), _defineProperty(_classNames, "".concat(classPrefix, "-loading"), loading), _classNames)),
    disabled: disabled
  }, loading ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(classPrefix, "-loading-wrapper")
  }, props.loadingText) : props.children));
};