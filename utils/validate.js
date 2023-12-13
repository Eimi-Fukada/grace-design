function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
export function isDef(val) {
  return val !== undefined && val !== null;
}
export function isObject(val) {
  return val !== null && _typeof(val) === 'object';
}
export function isPromise(obj) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/strict-boolean-expressions
    !!obj && _typeof(obj) === 'object' && typeof obj.then === 'function'
  );
}
export function isMobile(value) {
  value = value.replace(/[^-|\d]/g, '');
  return /^((\+86)|(86))?(1)\d{10}$/.test(value) || /^0[0-9-]{10,13}$/.test(value);
}
export function isNumeric(val) {
  return typeof val === 'number' || /^\d+(\.\d+)?$/.test(val);
}