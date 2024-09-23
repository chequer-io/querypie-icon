import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIQubeSlide: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M6 4C6 2.89543 6.89543 2 8 2H19L26 9V28C26 29.1046 25.1046 30 24 30H8C6.89543 30 6 29.1046 6 28V4Z"
      fill="#FBBC04"
    />
    <path d="M19 2L26 9H19V2Z" fill="#E79200" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 15V19H20V15H12ZM11 13C10.4477 13 10 13.4477 10 14V20C10 20.5523 10.4477 21 11 21H21C21.5523 21 22 20.5523 22 20V14C22 13.4477 21.5523 13 21 13H11Z"
      fill="white"
    />
  </SvgComponent>
);
