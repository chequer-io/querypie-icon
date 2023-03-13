import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIConnectHalfSolid: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32 1.41421L28.6305 4.7837C30.6539 7.49245 30.4352 11.3467 27.9741 13.8077L23.7819 18L14 8.21809L18.1922 4.02586C20.6533 1.56481 24.5075 1.34603 27.2163 3.36949L30.5858 0L32 1.41421ZM26.5599 12.3935C28.48 10.4734 28.48 7.3602 26.5599 5.44007C24.6398 3.51994 21.5266 3.51993 19.6064 5.44007L16.8284 8.21809L23.7819 15.1715L26.5599 12.3935ZM0 30.5858L3.36953 27.2163C1.34606 24.5075 1.56483 20.6533 4.02589 18.1922L8.21812 14L10.3339 16.1158L13.8261 12.6237L15.2403 14.0379L11.7482 17.53L14.3335 20.1154L17.8256 16.6232L19.2399 18.0374L15.7477 21.5296L18 23.7819L13.8078 27.9741C11.3467 30.4352 7.49249 30.6539 4.78374 28.6305L1.41421 32L0 30.5858Z"
      fill="#656C72"
    />
  </SvgComponent>
);
