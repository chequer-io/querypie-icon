import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIQubeTXT: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M6 4C6 2.89543 6.89543 2 8 2H19L26 9V28C26 29.1046 25.1046 30 24 30H8C6.89543 30 6 29.1046 6 28V4Z"
      fill="#797D90"
    />
    <path d="M19 2L26 9H19V2Z" fill="#545767" />
    <path
      d="M18.7769 14.8963V14H23V14.8963H21.4258V19.142H20.3511V14.8963H18.7769Z"
      fill="white"
    />
    <path
      d="M14.9379 14L15.9749 15.7525H16.0151L17.057 14H18.2848L16.7156 16.571L18.3199 19.142H17.0696L16.0151 17.387H15.9749L14.9204 19.142H13.675L15.2844 16.571L13.7052 14H14.9379Z"
      fill="white"
    />
    <path
      d="M9 14.8963V14H13.2231V14.8963H11.6489V19.142H10.5742V14.8963H9Z"
      fill="white"
    />
  </SvgComponent>
);