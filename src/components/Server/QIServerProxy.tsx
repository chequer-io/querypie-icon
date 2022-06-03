import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIServerProxy: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.995 2.005L26 2H25.99L25.995 2.005ZM24.59 3.41L25.995 2.005L30.99 7L25.99 12L24.58 10.59L27.16 8H22.91C22.96 8.33 22.99 8.66 22.99 9C22.99 12.86 19.85 16 15.99 16C13.2 16 10.8 14.36 9.66998 12H4.82001L7.40002 14.59L5.98999 16L0.98999 11L5.98999 6L7.40002 7.41L4.82001 10H9.07001C9.02001 9.67 8.98999 9.34 8.98999 9C8.98999 5.14 12.13 2 15.99 2C18.78 2 21.18 3.64 22.31 6H27.17L24.59 3.41ZM16 14C18.76 14 21 11.76 21 9C21 8.66 20.97 8.32 20.9 8H16V6H19.97C19.06 4.79 17.63 4 16 4C13.24 4 11 6.24 11 9C11 9.34 11.03 9.68 11.1 10H16V12H12.03C12.94 13.21 14.37 14 16 14ZM4 28C4 29.1 4.9 30 6 30H26C27.1 30 28 29.1 28 28V22C28 20.9 27.1 20 26 20H6C4.9 20 4 20.9 4 22V28ZM6 28V22H26V28H6ZM9 26C9.55228 26 10 25.5523 10 25C10 24.4477 9.55228 24 9 24C8.44772 24 8 24.4477 8 25C8 25.5523 8.44772 26 9 26Z"
      fill="#656C72"
    />
  </SvgComponent>
);
