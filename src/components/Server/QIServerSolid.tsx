import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIServerSolid: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 3C6.89551 3 6 3.89545 6 5V8C6 9.10455 6.89551 10 8 10H24C25.1045 10 26 9.10455 26 8V5C26 3.89545 25.1045 3 24 3H8ZM9 7.5C9.55225 7.5 10 7.05231 10 6.5C10 5.94769 9.55225 5.5 9 5.5C8.44775 5.5 8 5.94769 8 6.5C8 7.05231 8.44775 7.5 9 7.5Z"
      fill="#818589"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 12C6.89551 12 6 12.8954 6 14V17C6 18.1046 6.89551 19 8 19H24C25.1045 19 26 18.1046 26 17V14C26 12.8954 25.1045 12 24 12H8ZM9 16.5C9.55225 16.5 10 16.0523 10 15.5C10 14.9477 9.55225 14.5 9 14.5C8.44775 14.5 8 14.9477 8 15.5C8 16.0523 8.44775 16.5 9 16.5Z"
      fill="#818589"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 23C6 21.8954 6.89551 21 8 21H24C25.1045 21 26 21.8954 26 23V26C26 27.1046 25.1045 28 24 28H8C6.89551 28 6 27.1046 6 26V23ZM10 24.5C10 25.0523 9.55225 25.5 9 25.5C8.44775 25.5 8 25.0523 8 24.5C8 23.9477 8.44775 23.5 9 23.5C9.55225 23.5 10 23.9477 10 24.5Z"
      fill="#818589"
    />
  </SvgComponent>
);
