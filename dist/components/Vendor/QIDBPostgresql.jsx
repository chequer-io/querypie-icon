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
import SvgComponent from '../../common/SvgComponent';
var QIDBPostgresql = function (_a) {
    var props = __rest(_a, []);
    return (<SvgComponent viewBox="0 0 32 32" {...props}>
    <path d="M21.1856 26.2517C21.8214 25.298 22.1393 23.7086 22.2982 21.4834V21.3245V21.1656H22.4571C23.4108 21.1656 24.5234 21.0066 25.1591 20.6887C25.6359 20.3709 27.3843 19.5762 27.0664 18.3046C26.9075 17.8278 26.5896 17.6689 26.1128 17.5099C25.9538 17.5099 25.6359 17.5099 25.3181 17.5099C24.8412 17.6689 24.3644 17.6689 24.0465 17.6689C25.1591 15.9205 25.9538 13.8543 26.4307 11.7881C27.2254 8.60927 26.7485 7.17881 26.2717 6.54305C25.1591 4.95364 23.0929 4 20.8677 4C19.5962 4 18.4836 4.15894 17.8479 4.47682C17.371 4.31788 16.7353 4.31788 16.0995 4.31788C14.9869 4.31788 14.0333 4.47682 13.0797 5.11258C12.6028 4.7947 11.9671 4.63576 11.0134 4.47682C8.94721 4.15894 7.19886 4.47682 6.08628 5.27152C4.65582 6.22517 3.86112 8.13245 4.02006 10.6755C4.02006 11.4702 4.49688 13.8543 5.29158 16.2384C5.60946 17.5099 6.08628 18.6225 6.5631 19.4172C7.19886 20.6887 7.83463 21.4834 8.62933 21.6424C9.10615 21.8013 9.90085 21.9603 10.6956 21.1656C10.8545 21.3245 11.0134 21.4834 11.1724 21.4834C11.3313 21.6424 11.6492 21.8013 11.9671 21.8013C12.9207 22.1192 14.0333 21.9603 14.828 21.6424C14.828 21.8013 14.828 21.9603 14.828 22.1192C14.828 22.2781 14.828 22.4371 14.828 22.755C14.828 24.0265 14.9869 24.9801 15.1459 25.6159V25.7748C15.3048 26.0927 15.4638 26.7285 15.9406 27.2053C16.5763 27.6821 17.2121 27.8411 17.6889 27.8411C18.0068 27.8411 18.3247 27.8411 18.4836 27.6821C19.4373 27.5232 20.5499 27.2053 21.1856 26.2517ZM15.4638 25.457C15.1459 24.8212 15.1459 22.755 15.1459 20.6887C14.5101 21.1656 13.8744 21.4834 13.0797 21.4834C12.7618 21.4834 12.4439 21.4834 11.9671 21.3245C11.8081 21.3245 10.8545 21.0066 11.0134 20.5298C11.0134 20.053 11.8081 19.894 12.126 19.7351C13.0797 19.5762 13.2386 19.4172 13.5565 19.0993C13.5565 18.7815 13.5565 18.7815 13.7154 18.6225C13.2386 18.6225 12.7618 18.4636 12.4439 18.3046C11.8081 18.9404 11.1724 19.7351 10.5366 20.3709C10.0598 21.0066 9.58297 21.1656 9.26509 21.1656C9.10615 21.1656 8.94721 21.1656 8.78827 21.1656C7.67568 20.8477 6.72204 19.0993 5.7684 16.0795C5.13264 13.6954 4.65582 11.3113 4.65582 10.5166C4.49688 8.29139 5.13264 6.54305 6.40416 5.74834C7.51674 4.95364 8.94721 4.7947 10.8545 5.11258C11.9671 5.27152 12.9207 5.5894 13.2386 5.74834C14.0333 5.27152 14.9869 4.95364 16.0995 4.95364C16.7353 4.95364 17.2121 5.11258 17.8479 5.11258C18.1658 4.95364 19.2783 4.63576 20.8677 4.63576C23.0929 4.63576 24.8412 5.43046 25.9538 7.01987C26.2717 7.49669 26.4307 8.13245 26.2717 8.92715C26.2717 9.72185 26.1128 10.6755 25.7949 11.6291C25.1591 13.8543 24.2055 16.0795 22.934 18.1457C23.0929 18.3046 23.7287 18.4636 25.3181 18.1457C25.7949 17.9868 26.2717 18.1457 26.2717 18.4636C26.4307 19.0993 25.3181 19.7351 24.8412 20.053C24.3644 20.3709 23.4108 20.5298 22.775 20.5298C22.4571 20.5298 22.1393 20.5298 21.8214 20.3709C21.6624 21.4834 21.5035 23.5497 21.3446 24.5033C21.0267 26.0927 20.3909 26.8874 18.6426 27.2053C18.3247 27.2053 18.1658 27.3642 17.8479 27.3642C16.2585 27.2053 15.7816 25.9338 15.4638 25.457Z" fill="#05243A"/>
    <path d="M22.7749 18.6225C22.616 18.6225 22.616 18.6225 22.7749 18.6225C22.616 18.6225 22.616 18.6225 22.616 18.6225C22.2981 18.7815 21.9802 18.7815 21.9802 19.5762C22.1392 19.5762 22.457 19.7351 23.0928 19.7351C23.7286 19.7351 24.3643 19.5762 24.6822 19.4172C25.159 19.2583 25.4769 18.9404 25.6359 18.7815C24.2054 19.0994 23.2517 19.0993 22.7749 18.6225Z" fill="#336791"/>
    <path d="M11.6491 17.6689C10.8544 16.8742 10.5365 15.7616 10.6955 14.649C10.8544 13.5365 10.6955 12.5828 10.6955 11.9471C10.6955 11.7881 10.6955 11.6292 10.6955 11.6292C10.6955 11.4702 10.6955 8.13249 12.6028 6.2252C11.4902 5.74838 8.62926 5.11262 6.88092 6.2252C5.76834 7.0199 5.29152 8.45037 5.45046 10.5166C5.45046 11.1524 5.92728 13.5365 6.56304 15.7616C7.35774 18.4636 8.31138 20.053 9.10608 20.3709C9.26503 20.3709 9.58291 20.5298 10.0597 19.8941C10.8544 18.9404 11.4902 18.1457 11.8081 17.8279C11.8081 17.8279 11.6491 17.6689 11.6491 17.6689Z" fill="#336791"/>
    <path d="M21.5035 7.49672C22.6161 8.76824 23.0929 10.0398 23.0929 10.5166V10.6755C23.0929 11.1523 23.0929 11.6292 22.934 11.947C22.934 12.2649 22.775 12.5828 22.775 12.9007C22.775 13.2186 22.775 13.6954 22.934 14.0133C23.0929 14.9669 23.2518 16.0795 22.4571 17.1921C22.4571 17.1921 22.4571 17.1921 22.6161 17.351C25.3181 13.2186 26.1128 8.29142 25.3181 7.33778C24.2055 5.90731 22.775 5.27155 20.7088 5.11261C19.9141 5.11261 19.2783 5.11261 18.8015 5.27155C20.073 6.06625 20.8677 6.70201 21.5035 7.49672Z" fill="#336791"/>
    <path d="M22.457 10.8344C21.1855 10.6754 20.5497 10.9933 20.3908 11.3112C19.755 12.2649 21.0266 14.8079 21.6623 15.7615C21.8213 16.0794 21.9802 16.2384 21.9802 16.3973C21.9802 16.5562 22.1391 16.7152 22.1391 16.7152C22.616 15.9205 22.457 14.9668 22.2981 14.1721C22.2981 13.6953 22.1391 13.3774 22.1391 12.9006C22.1391 12.4238 22.1391 12.1059 22.2981 11.788C22.457 11.4702 22.457 11.1523 22.457 10.8344ZM21.6623 11.6291C21.6623 11.6291 21.5034 11.788 21.3444 11.788C21.0266 11.788 20.8676 11.6291 20.8676 11.4702C20.8676 11.3112 21.1855 11.1523 21.3444 11.1523C21.6623 11.1523 21.9802 11.1523 21.9802 11.3112C21.8213 11.4702 21.8213 11.4702 21.6623 11.6291Z" fill="#336791"/>
    <path d="M12.126 17.1921C12.6028 17.6689 13.2386 17.9868 13.8743 17.9868C13.8743 17.6689 14.0333 17.351 14.1922 17.0331V16.8742C14.1922 16.7152 14.3511 16.5563 14.3511 16.3974C14.669 15.4437 15.1458 14.4901 14.669 11.947C14.5101 11.3113 14.3511 11.1523 13.8743 10.9934C12.9207 10.8344 11.6492 11.4702 11.3313 11.7881V11.947C11.3313 12.5828 11.4902 13.5364 11.3313 14.808C11.1723 15.7616 11.4902 16.5563 12.126 17.1921ZM13.2386 11.4702C13.2386 11.3113 13.5564 11.3113 13.7154 11.3113C14.0333 11.3113 14.3511 11.4702 14.3511 11.6291C14.3511 11.7881 14.0333 12.106 13.7154 12.106C13.5564 12.106 13.3975 11.947 13.2386 11.7881C13.2386 11.7881 13.0796 11.6291 13.2386 11.4702C13.0796 11.4702 13.0796 11.4702 13.2386 11.4702Z" fill="#336791"/>
    <path d="M21.9803 17.8278C21.8214 17.5099 21.5035 17.1921 21.1856 16.7152C21.1856 16.5563 21.0267 16.3974 20.8677 16.2384C20.3909 14.808 18.9604 12.2649 19.9141 10.9934C20.3909 10.3576 21.1856 10.1987 22.4571 10.1987C22.2982 9.72187 21.8214 8.76822 21.1856 7.81458C20.073 6.86094 18.4836 5.58942 16.0995 5.58942C14.828 5.58942 13.8743 5.9073 13.0796 6.702C11.8081 7.97352 11.4902 9.88081 11.4902 10.9934C11.4902 10.9934 11.6492 10.9934 11.6492 10.8344C11.9671 10.6755 12.6028 10.3576 13.2386 10.3576C14.3512 10.1987 15.1459 10.6755 15.3048 11.7881C15.9406 14.4901 15.3048 15.7616 14.9869 16.7152C14.9869 16.8742 14.828 17.0331 14.828 17.1921V17.351C14.669 17.5099 14.5101 17.8278 14.3512 18.1457C14.669 18.1457 14.828 18.1457 14.9869 18.3046C15.4637 18.3046 15.7816 18.6225 15.7816 19.0994V19.2583C15.7816 19.2583 15.7816 19.2583 15.7816 19.4172C15.7816 22.1192 15.7816 24.6623 16.0995 25.298C16.4174 26.0927 16.8942 26.8874 18.4836 26.5695C19.9141 26.2517 20.3909 25.7748 20.7088 24.3444C20.8677 23.2318 21.1856 20.3709 21.3445 19.7351C21.3445 18.4636 21.9803 18.3046 22.2982 18.1457C22.1392 17.9868 22.1392 17.8278 21.9803 17.8278Z" fill="#336791"/>
    <path d="M14.828 18.7815C14.669 18.7815 14.5101 18.6226 14.3512 18.9404C14.1922 19.0994 14.0333 19.2583 14.0333 19.2583C13.5565 19.8941 13.3975 20.053 12.126 20.212C11.8081 20.212 11.8081 20.3709 11.6492 20.3709C11.8081 20.3709 11.9671 20.5298 12.126 20.5298C13.0796 20.6888 14.1922 20.6888 15.1459 19.5762C15.3048 19.4173 15.1459 19.2583 15.1459 19.0994C15.1459 19.0994 14.9869 18.7815 14.828 18.7815Z" fill="#336791"/>
  </SvgComponent>);
};
export default QIDBPostgresql;
