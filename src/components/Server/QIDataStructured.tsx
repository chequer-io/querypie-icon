import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDataStructured: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27 18V22.14C28.72 22.59 30 24.14 30 26C30 28.21 28.21 30 26 30C23.79 30 22 28.21 22 26C22 24.14 23.28 22.59 25 22.14V18H17V22H20V30H12V22H15V18H7V22.14C8.72 22.59 10 24.14 10 26C10 28.21 8.21 30 6 30C3.79 30 2 28.21 2 26C2 24.14 3.28 22.59 5 22.14V18C5 16.9 5.9 16 7 16H15V12H6C4.9 12 4 11.1 4 10V4C4 2.9 4.9 2 6 2H26C27.1 2 28 2.9 28 4V10C28 11.1 27.1 12 26 12H17V16H25C26.1 16 27 16.9 27 18ZM6 28C7.1 28 8 27.1 8 26C8 24.9 7.1 24 6 24C4.9 24 4 24.9 4 26C4 27.1 4.9 28 6 28ZM14 28H18V24H14V28ZM6 4V10H26V4H6ZM24 26C24 27.1 24.9 28 26 28C27.1 28 28 27.1 28 26C28 24.9 27.1 24 26 24C24.9 24 24 24.9 24 26ZM10 7C10 7.55228 9.55228 8 9 8C8.44772 8 8 7.55228 8 7C8 6.44772 8.44772 6 9 6C9.55228 6 10 6.44772 10 7Z"
      fill="#656C72"
    />
  </SvgComponent>
);
