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
var QICloseCircleLine = function (_a) {
    var props = __rest(_a, []);
    return (_jsx(SvgComponent, __assign({ viewBox: "0 0 32 32", role: "querypie-icon", "data-qi-color-controllable": "true" }, props, { children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16 4C22.62 4 28 9.38 28 16C28 22.62 22.62 28 16 28C9.38 28 4 22.62 4 16C4 9.38 9.38 4 16 4ZM16 2C8.27002 2 2 8.27 2 16C2 23.73 8.27002 30 16 30C23.73 30 30 23.73 30 16C30 8.27 23.73 2 16 2ZM9 10.4143L14.5858 16L9 21.5858L10.4142 23L16 17.4142L21.5858 23L23 21.5858L17.4142 16L23 10.4142L21.5858 9L16 14.5858L10.4142 9.00005L9 10.4143Z", fill: "black" }, void 0) }), void 0));
};
export default QICloseCircleLine;