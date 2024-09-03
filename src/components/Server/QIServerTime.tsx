import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIServerTime: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 10C8 14.41 11.59 18 16 18C20.41 18 24 14.41 24 10C24 5.59 20.41 2 16 2C11.59 2 8 5.59 8 10ZM10 10C10 6.69 12.69 4 16 4C19.31 4 22 6.69 22 10C22 13.31 19.31 16 16 16C12.69 16 10 13.31 10 10ZM2 28C2 29.1 2.9 30 4 30H28C29.1 30 30 29.1 30 28V22C30 20.9 29.1 20 28 20H4C2.9 20 2 20.9 2 22V28ZM4 28V22H28V28H4ZM7 26C7.55228 26 8 25.5523 8 25C8 24.4477 7.55228 24 7 24C6.44772 24 6 24.4477 6 25C6 25.5523 6.44772 26 7 26ZM17 9.59003L19 11.59L17.59 13L15 10.41V6H17V9.59003Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
