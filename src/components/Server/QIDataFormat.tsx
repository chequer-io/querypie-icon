import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDataFormat: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 30H28C29.1 30 30 29.1 30 28V4C30 2.9 29.1 2 28 2H4C2.9 2 2 2.9 2 4V28C2 29.1 2.9 30 4 30ZM4 28V4H28V28H4ZM6 12C6 14.21 7.79 16 10 16C12.21 16 14 14.21 14 12C14 9.79 12.21 8 10 8C7.79 8 6 9.79 6 12ZM8 12C8 10.9 8.9 10 10 10C11.1 10 12 10.9 12 12C12 13.1 11.1 14 10 14C8.9 14 8 13.1 8 12ZM26 11H18V13H26V11ZM14 21V19H6V21H14ZM22 24C19.79 24 18 22.21 18 20C18 17.79 19.79 16 22 16C24.21 16 26 17.79 26 20C26 22.21 24.21 24 22 24ZM22 18C20.9 18 20 18.9 20 20C20 21.1 20.9 22 22 22C23.1 22 24 21.1 24 20C24 18.9 23.1 18 22 18Z"
      fill="#818589"
    />
  </SvgComponent>
);
