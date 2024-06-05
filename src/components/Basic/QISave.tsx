import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QISave: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.17 6L26 11.83V26H22V18C22 16.9 21.1 16 20 16H12C10.9 16 10 16.9 10 18V26H6V6H10V10C10 11.1 10.9 12 12 12H21V10H12V6H20.17ZM12 26H20V18H12V26ZM21 4H6C4.90002 4 4 4.89999 4 6V26C4 27.1 4.90002 28 6 28H26C27.1 28 28 27.1 28 26V11L21 4Z"
      fill="#818589"
    />
  </SvgComponent>
);
