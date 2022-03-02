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
var Oracle = function (_a) {
  var props = __rest(_a, []);
  return _jsx(
    SvgComponent,
    __assign({ viewBox: '0 0 32 32' }, props, {
      children: _jsx(
        'path',
        {
          d: 'M11.08 8.00001C9.97466 7.99825 8.87983 8.21467 7.85829 8.63686C6.83674 9.05905 5.90856 9.6787 5.12696 10.4603C4.34536 11.2419 3.72571 12.1701 3.30352 13.1916C2.88133 14.2132 2.66488 15.308 2.66664 16.4133C2.66664 18.6447 3.55306 20.7847 5.13087 22.3625C6.70868 23.9403 8.84865 24.8267 11.08 24.8267H20.92C22.0248 24.8267 23.1189 24.6091 24.1396 24.1863C25.1604 23.7634 26.0879 23.1437 26.8691 22.3625C27.6504 21.5812 28.2701 20.6537 28.6929 19.633C29.1157 18.6122 29.3333 17.5182 29.3333 16.4133C29.3333 14.182 28.4469 12.042 26.8691 10.4642C25.2913 8.88641 23.1513 8.00001 20.92 8.00001H11.08ZM20.7333 11.0133C21.4594 11.0168 22.1776 11.1635 22.8468 11.445C23.5161 11.7265 24.1232 12.1372 24.6335 12.6537C25.1438 13.1701 25.5471 13.7822 25.8205 14.4548C26.0939 15.1274 26.2319 15.8473 26.2267 16.5733C26.2196 18.0281 25.6386 19.4213 24.61 20.45C23.5813 21.4787 22.1881 22.0597 20.7333 22.0667H11.4C10.6751 22.0702 9.95659 21.9309 9.28553 21.6567C8.61447 21.3825 8.004 20.9789 7.48894 20.4688C6.97389 19.9587 6.56434 19.3521 6.2837 18.6837C6.00306 18.0154 5.85682 17.2982 5.85332 16.5733C5.86033 15.1186 6.44134 13.7254 7.47002 12.6967C8.49871 11.668 9.89189 11.087 11.3467 11.08L20.7333 11.0133Z',
          fill: '#E30613',
        },
        void 0,
      ),
    }),
    void 0,
  );
};
export default Oracle;
