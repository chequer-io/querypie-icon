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
import SvgComponent from '../../common/SvgComponent';
var Security_Legacy = function (_a) {
  var props = __rest(_a, []);
  return (
    <SvgComponent viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4545 6.76924C13.0542 6.08655 16 4 16 4C16 4 18.9458 6.08655 20.5454 6.76924C22.0628 7.41682 26 8.00001 26 8.00001V15C26 21.1066 21.7333 26.6136 16 28C10.2667 26.6136 6.00002 21.1066 6.00002 15L6 8.00001C6 8.00001 9.93713 7.41682 11.4545 6.76924ZM23.4625 9.59117C23.6473 9.62687 23.8274 9.66061 24 9.69215V15C24 20.0458 20.57 24.5865 16 25.9301C11.43 24.5865 8.00002 20.0458 8.00002 15L8 9.69214C8.17257 9.66061 8.35268 9.62687 8.53752 9.59117C9.68087 9.37034 11.2536 9.02952 12.2396 8.60873C13.2174 8.19144 14.4859 7.40909 15.415 6.80688C15.6213 6.67313 15.8181 6.54353 16 6.42236C16.1819 6.54353 16.3787 6.67313 16.585 6.80688C17.5141 7.40909 18.7826 8.19144 19.7604 8.60873C20.7464 9.02953 22.3191 9.37034 23.4625 9.59117ZM15 13C15 12.4477 15.4477 12 16 12C16.5523 12 17 12.4477 17 13V14H15V13ZM19 13V14C20.1046 14 21 14.8954 21 16V20C21 21.1046 20.1046 22 19 22H13C11.8954 22 11 21.1046 11 20V16C11 14.8954 11.8954 14 13 14V13C13 11.3431 14.3431 10 16 10C17.6569 10 19 11.3431 19 13ZM13 20V16H19V20H13Z"
        fill="black"
      />
    </SvgComponent>
  );
};
export default Security_Legacy;
