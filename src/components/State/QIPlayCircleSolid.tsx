import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIPlayCircleSolid: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30ZM12 10.8217C12 10.0326 12.8712 9.55435 13.5369 9.978L21.6743 15.1563C22.2917 15.5493 22.2917 16.4507 21.6743 16.8437L13.5369 22.022C12.8712 22.4456 12 21.9674 12 21.1783V10.8217Z"
      fill="#656C72"
    />
  </SvgComponent>
);
