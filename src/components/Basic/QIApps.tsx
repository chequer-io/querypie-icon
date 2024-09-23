import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIApps: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 5V13H13V5H5ZM4 3C3.44772 3 3 3.44772 3 4V14C3 14.5523 3.44772 15 4 15H14C14.5523 15 15 14.5523 15 14V4C15 3.44772 14.5523 3 14 3H4Z"
      fill="#7E848A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 19V27H13V19H5ZM4 17C3.44772 17 3 17.4477 3 18V28C3 28.5523 3.44772 29 4 29H14C14.5523 29 15 28.5523 15 28V18C15 17.4477 14.5523 17 14 17H4Z"
      fill="#7E848A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 5V13H27V5H19ZM18 3C17.4477 3 17 3.44772 17 4V14C17 14.5523 17.4477 15 18 15H28C28.5523 15 29 14.5523 29 14V4C29 3.44772 28.5523 3 28 3H18Z"
      fill="#7E848A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 19V27H27V19H19ZM18 17C17.4477 17 17 17.4477 17 18V28C17 28.5523 17.4477 29 18 29H28C28.5523 29 29 28.5523 29 28V18C29 17.4477 28.5523 17 28 17H18Z"
      fill="#7E848A"
    />
  </SvgComponent>
);