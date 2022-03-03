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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SvgComponent from '../../common/SvgComponent';
var QIDBDynamodb = function (_a) {
    var props = __rest(_a, []);
    return (_jsxs(SvgComponent, __assign({ viewBox: "0 0 32 32", role: "querypie-icon", "data-qi-color-controllable": "false" }, props, { children: [_jsx("path", { d: "M19.3471 28H19.6385L24.4018 25.618L24.4806 25.5055V6.49261L24.4018 6.38009L19.6385 4H19.3433L19.3471 28Z", fill: "#5294CF" }, void 0), _jsx("path", { d: "M13.1486 28H12.8524L8.09321 25.618L7.99704 25.4516L7.948 6.58973L8.09321 6.38009L12.8524 4H13.1525L13.1486 28Z", fill: "#1F5B98" }, void 0), _jsx("path", { d: "M12.8611 4H19.6351V28H12.8611V4Z", fill: "#2D72B8" }, void 0), _jsx("path", { d: "M26.8959 15.461L26.7353 15.4254L24.437 15.211L24.4033 15.2283L19.6354 15.0379H12.8615L8.09367 15.2283V11.5923L8.08886 11.5951L8.09367 11.5846L12.8615 10.4796H19.6354L24.4033 11.5846L26.1564 12.5164V11.9173L26.8969 11.8365L26.82 11.6865L24.4745 10.0094L24.4033 10.0325L19.6354 8.55536H12.8615L8.09367 10.0325V6.3801L5.6001 9.30064V11.8519L5.61933 11.8375L6.34057 11.9163V12.528L5.6001 12.9242V15.4629L5.61933 15.461L6.34057 15.4716V16.5371L5.71838 16.5467L5.6001 16.5352V19.0749L6.34057 19.473V20.0914L5.63087 20.1693L5.6001 20.1462V22.6965L8.09367 25.618V21.9656L12.8615 23.4427H19.6354L24.4168 21.9608L24.4803 21.9887L26.795 20.3366L26.8959 20.1721L26.1555 20.0904V19.4846L26.0583 19.4461L24.4745 20.3L24.4168 20.4202L19.6354 21.5185V21.5194H12.8615V21.5185L8.09367 20.4154V16.7669L12.8615 16.9573V16.9621H19.6354L24.4033 16.7679L24.512 16.8179L26.7401 16.6265L26.8969 16.5496L26.1564 16.539V15.4735L26.8959 15.461Z", fill: "#1A476F" }, void 0), _jsx("path", { d: "M24.4033 21.9656V25.618L26.8969 22.6965V20.1625L24.4177 21.9618L24.4033 21.9656ZM24.4033 20.4231L24.4177 20.4202L26.8969 19.0864V16.5371L24.4033 16.766V20.4231ZM24.4168 11.5875L24.4023 11.5846V15.2283L26.8959 15.461V12.9126L24.4168 11.5875ZM24.4168 10.0469L26.8959 11.8356V9.3016L24.4023 6.3801V10.0325L24.4168 10.0373V10.0469Z", fill: "#2D72B8" }, void 0)] }), void 0));
};
export default QIDBDynamodb;