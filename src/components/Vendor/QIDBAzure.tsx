import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDBAzure: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M17.2363 5.33333L9.37502 12.1504L2.66675 24.192H8.71581L17.2363 5.33333ZM18.2817 6.92799L14.927 16.384L21.3601 24.4661L8.88008 26.6101H29.3334L18.2817 6.92799Z"
      fill="#0072C6"
    />
  </SvgComponent>
);