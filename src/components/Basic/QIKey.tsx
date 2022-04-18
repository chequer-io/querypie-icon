import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIKey: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26 9.5C26 11.433 24.433 13 22.5 13C20.567 13 19 11.433 19 9.5C19 7.567 20.567 6 22.5 6C24.433 6 26 7.567 26 9.5ZM24 9.5C24 10.3284 23.3284 11 22.5 11C21.6716 11 21 10.3284 21 9.5C21 8.67157 21.6716 8 22.5 8C23.3284 8 24 8.67157 24 9.5Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 20.7637L18.3618 18.4019C19.3327 18.7878 20.3916 19 21.5 19C26.1944 19 30 15.1944 30 10.5C30 5.80558 26.1944 2 21.5 2C16.8056 2 13 5.80558 13 10.5C13 11.6084 13.2122 12.6672 13.5981 13.6382L2.98661 24.2496C1.67113 25.565 1.67113 27.6978 2.98661 29.0133C4.30208 30.3288 6.43488 30.3288 7.75036 29.0133L8.76368 28H12V24.7637L12.7637 24H16V20.7637ZM21.5 17C25.0899 17 28 14.0899 28 10.5C28 6.91015 25.0899 4 21.5 4C17.9102 4 15 6.91015 15 10.5C15 11.0342 15.0645 11.5534 15.186 12.0502C15.3602 12.762 15.6516 13.4279 16.0386 14.0261L4.40082 25.6638C3.86639 26.1982 3.86639 27.0647 4.40082 27.5991C4.93524 28.1335 5.80172 28.1335 6.33615 27.5991L7.93525 26H10V23.9353L11.9353 22H14V19.9353L17.9739 15.9614C18.5721 16.3484 19.238 16.6398 19.9498 16.814C20.4466 16.9355 20.9658 17 21.5 17Z"
      fill="black"
    />
  </SvgComponent>
);
