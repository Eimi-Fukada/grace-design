function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import classNames from 'classnames';
import React from 'react';
import { withNativeProps } from "../../../src/utils/native-props";
var classPrefix = "gd-space";
export var Space = function Space(props) {
  var _classNames;
  var _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
    onClick = props.onClick;
  return withNativeProps(props, /*#__PURE__*/React.createElement("div", {
    style: props.style,
    className: classNames(props.className, classPrefix, (_classNames = {}, _defineProperty(_classNames, "".concat(classPrefix, "-wrap"), props.wrap), _defineProperty(_classNames, "".concat(classPrefix, "-block"), props.block), _defineProperty(_classNames, "".concat(classPrefix, "-").concat(direction), true), _defineProperty(_classNames, "".concat(classPrefix, "-align-").concat(props.align), !!props.align), _defineProperty(_classNames, "".concat(classPrefix, "-justify-").concat(props.justify), !!props.justify), _classNames)),
    onClick: onClick
  }, React.Children.map(props.children, function (child) {
    return child !== null && child !== undefined && /*#__PURE__*/React.createElement("div", {
      className: "".concat(classPrefix, "-item")
    }, child);
  })));
};