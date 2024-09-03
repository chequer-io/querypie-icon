import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIUpSolid: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 30C23.7319 30 30 23.732 30 16C30 8.26801 23.7319 2 16 2C8.26807 2 2 8.26801 2 16C2 23.732 8.26807 30 16 30ZM9.97803 16.4631L15.1564 8.32574C15.5493 7.70825 16.4507 7.70825 16.8436 8.32574L22.022 16.4631C22.4457 17.1288 21.9674 18 21.1783 18H18V22C18 22.5523 17.5522 23 17 23H15C14.4478 23 14 22.5523 14 22V18H10.8217C10.0326 18 9.55432 17.1288 9.97803 16.4631Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
