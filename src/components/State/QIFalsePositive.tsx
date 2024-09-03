import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIFalsePositive: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M15 22C18.866 22 22 18.866 22 15C22 13.4953 21.5253 12.1016 20.7174 10.9603L10.9603 20.7174C12.1016 21.5253 13.4953 22 15 22Z"
      fill="#7E848A"
    />
    <path
      d="M19.341 9.50823L9.50823 19.341C8.56384 18.1479 8 16.6398 8 15C8 11.134 11.134 8 15 8C16.6398 8 18.1479 8.56384 19.341 9.50823Z"
      fill="#7E848A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.4459 24.883C21.174 26.8264 18.2241 28 15 28C7.8203 28 2 22.1797 2 15C2 7.8203 7.8203 2 15 2C22.1797 2 28 7.8203 28 15C28 18.2241 26.8264 21.174 24.883 23.4459L30 28.59L28.59 30L23.4459 24.883ZM15 24C19.9706 24 24 19.9706 24 15C24 10.0294 19.9706 6 15 6C10.0294 6 6 10.0294 6 15C6 19.9706 10.0294 24 15 24Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
