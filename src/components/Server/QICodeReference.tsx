import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QICodeReference: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.06 1.98767L13.9111 17.4715L15.843 17.9891L19.9919 2.50531L18.06 1.98767ZM10 3.99999L4 9.99999L10 16L11.41 14.59L6.83 9.99999L11.41 5.41L10 3.99999ZM24 3.99999L30 9.99999L24 16L22.59 14.59L27.17 9.99999L22.59 5.41L24 3.99999ZM4 22V20H12V28H10V23.41L3.41 30L2 28.59L8.59 22H4Z"
      fill="#656C72"
    />
  </SvgComponent>
);
