var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import SvgComponent from '../../common/SvgComponent';
var QICollapse = function (_a) {
    var props = __rest(_a, []);
    return (_jsx(SvgComponent, __assign({ viewBox: "0 0 32 32", role: "querypie-icon", "data-qi-color-controllable": "true" }, props, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 5.41003L16 12.41L23 5.41003L21.59 4L16 9.57996L10.41 4L9 5.41003ZM23 26.59L16 19.59L9 26.59L10.41 28L16 22.42L21.59 28L23 26.59Z", fill: "black" }, void 0) }), void 0));
};
export default QICollapse;