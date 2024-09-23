import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIQubeImage: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M4 6C4 4.89543 4.89543 4 6 4H21.5858C21.851 4 22.1054 4.10536 22.2929 4.29289L27.7071 9.70711C27.8946 9.89464 28 10.149 28 10.4142V26C28 27.1046 27.1046 28 26 28H6C4.89543 28 4 27.1046 4 26V6Z"
      fill="#E14C4C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 8V4H12V8H21V10H12C10.8954 10 10 9.10457 10 8Z"
      fill="white"
    />
    <path
      d="M10 14.5714C10 14.1547 10.158 13.755 10.4393 13.4603C10.7206 13.1656 11.1022 13 11.5 13H20.5C20.8978 13 21.2794 13.1656 21.5607 13.4603C21.842 13.755 22 14.1547 22 14.5714V22.4286C22 22.8453 21.842 23.245 21.5607 23.5397C21.2794 23.8344 20.8978 24 20.5 24H11.5C11.1022 24 10.7206 23.8344 10.4393 23.5397C10.158 23.245 10 22.8453 10 22.4286V14.5714ZM10.75 21.6429V22.4286C10.75 22.637 10.829 22.8368 10.9697 22.9842C11.1103 23.1315 11.3011 23.2143 11.5 23.2143H20.5C20.6989 23.2143 20.8897 23.1315 21.0303 22.9842C21.171 22.8368 21.25 22.637 21.25 22.4286V19.6786L18.4173 18.1488C18.3469 18.1119 18.2673 18.0991 18.1896 18.1122C18.112 18.1253 18.0402 18.1637 17.9845 18.2219L15.202 21.1369L13.207 19.7446C13.135 19.6943 13.0486 19.6717 12.9625 19.6806C12.8763 19.6895 12.7958 19.7293 12.7345 19.7933L10.75 21.6429ZM14.5 16.5357C14.5 16.2231 14.3815 15.9234 14.1705 15.7023C13.9595 15.4813 13.6734 15.3571 13.375 15.3571C13.0766 15.3571 12.7905 15.4813 12.5795 15.7023C12.3685 15.9234 12.25 16.2231 12.25 16.5357C12.25 16.8483 12.3685 17.1481 12.5795 17.3691C12.7905 17.5901 13.0766 17.7143 13.375 17.7143C13.6734 17.7143 13.9595 17.5901 14.1705 17.3691C14.3815 17.1481 14.5 16.8483 14.5 16.5357Z"
      fill="white"
    />
  </SvgComponent>
);
