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
var QISettingEdit = function (_a) {
    var props = __rest(_a, []);
    return (_jsx(SvgComponent, __assign({ viewBox: "0 0 32 32", role: "querypie-icon", "data-qi-color-controllable": "true" }, props, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 28H14V30H6C4.90002 30 4 29.1 4 28V4C4 2.90002 4.90002 2 6 2H16C16.3 2 16.5 2.09998 16.7 2.30005L23.7 9.30005C23.9 9.5 24 9.69995 24 10V14H22V12H16C14.9 12 14 11.1 14 10V4H6V28ZM21.6 10L16 4.40002V10H21.6ZM25.9 22H28V24V24.01H25.88C25.75 24.64 25.5 25.24 25.15 25.76L26.64 27.25L25.23 28.66L23.74 27.17C23.22 27.52 22.63 27.77 21.99 27.9V30H19.99V27.88C19.36 27.75 18.76 27.5 18.24 27.15L16.75 28.64L15.34 27.23L16.83 25.74C16.48 25.22 16.23 24.63 16.1 23.99H14V21.99H16.12C16.25 21.36 16.5 20.76 16.85 20.24L15.36 18.75L16.77 17.34L18.26 18.83C18.78 18.48 19.37 18.23 20.01 18.1V16H22.01V18.11C22.64 18.24 23.24 18.49 23.76 18.84L25.25 17.35L26.66 18.76L25.17 20.25C25.52 20.77 25.77 21.36 25.9 22ZM18 23C18 24.65 19.35 26 21 26C22.65 26 24 24.65 24 23C24 21.35 22.65 20 21 20C19.35 20 18 21.35 18 23Z", fill: "black" }, void 0) }), void 0));
};
export default QISettingEdit;
