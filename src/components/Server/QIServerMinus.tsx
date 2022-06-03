import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIServerMinus: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 3H8C6.9 3 6 3.9 6 5V27C6 28.1 6.9 29 8 29H18V27H8V21H26V5C26 3.9 25.1 3 24 3ZM24 19H8V13H24V19ZM24 11H8V5H24V11ZM11 9C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7C10.4477 7 10 7.44772 10 8C10 8.55228 10.4477 9 11 9ZM11 17C11.5523 17 12 16.5523 12 16C12 15.4477 11.5523 15 11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17ZM12 24C12 24.5523 11.5523 25 11 25C10.4477 25 10 24.5523 10 24C10 23.4477 10.4477 23 11 23C11.5523 23 12 23.4477 12 24ZM29 26H21V28H29V26Z"
      fill="#656C72"
    />
  </SvgComponent>
);
