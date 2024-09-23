import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QISkipBackFilled: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27.5 27.87C27.65 27.96 27.83 28 28 28C28.17 28 28.35 27.96 28.5 27.87C28.81 27.69 29 27.36 29 27V5C29 4.64 28.81 4.31 28.5 4.13C28.19 3.95 27.81 3.95 27.5 4.13L8.5 15.13C8.19 15.31 8 15.64 8 16C8 16.36 8.19 16.69 8.5 16.87L27.5 27.87ZM3 4H5V28H3V4Z"
      fill="#7E848A"
    />
  </SvgComponent>
);