var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
import { jsx as _jsx } from 'react/jsx-runtime';
import SvgComponent from '../../common/SvgComponent';
var ChevronDown = function (_a) {
  var props = __rest(_a, []);
  return _jsx(
    SvgComponent,
    __assign({ viewBox: '0 0 32 32' }, props, {
      children: _jsx(
        'path',
        {
          d: 'M16 21.41L6 11.41L7.41 10L16 18.58L24.59 10L26 11.41L16 21.41Z',
          fill: 'black',
        },
        void 0,
      ),
    }),
    void 0,
  );
};
export default ChevronDown;
