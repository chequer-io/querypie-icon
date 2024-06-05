import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIUserAdd: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5C14.76 5 17 7.23999 17 10C17 12.76 14.76 15 12 15C9.23999 15 7 12.76 7 10C7 7.23999 9.23999 5 12 5ZM12 3C8.13 3 5 6.13 5 10C5 13.87 8.13 17 12 17C15.87 17 19 13.87 19 10C19 6.13 15.87 3 12 3ZM22 29H20V23C20 20.24 15.76 20 13 20H11C8.23999 20 4 20.24 4 23V29H2V23C2 19.14 7.14001 18.01 11 18H13C16.86 18.01 21.99 19.14 22 23V29ZM28 14H32V16H28V20H26V16H22V14H26V10H28V14Z"
      fill="#818589"
    />
  </SvgComponent>
);
