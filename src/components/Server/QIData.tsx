import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIData: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 7C3 9.21 4.79 11 7 11C9.21 11 11 9.21 11 7C11 4.79 9.21 3 7 3C4.79 3 3 4.79 3 7ZM5 7C5 5.9 5.9 5 7 5C8.1 5 9 5.9 9 7C9 8.1 8.1 9 7 9C5.9 9 5 8.1 5 7ZM15 6H28V8H15V6ZM15 24H28V26H15V24ZM17 15H4V17H17V15ZM7 29C4.79 29 3 27.21 3 25C3 22.79 4.79 21 7 21C9.21 21 11 22.79 11 25C11 27.21 9.21 29 7 29ZM7 23C5.9 23 5 23.9 5 25C5 26.1 5.9 27 7 27C8.1 27 9 26.1 9 25C9 23.9 8.1 23 7 23ZM21 16C21 18.21 22.79 20 25 20C27.21 20 29 18.21 29 16C29 13.79 27.21 12 25 12C22.79 12 21 13.79 21 16ZM23 16C23 14.9 23.9 14 25 14C26.1 14 27 14.9 27 16C27 17.1 26.1 18 25 18C23.9 18 23 17.1 23 16Z"
      fill="#818589"
    />
  </SvgComponent>
);
