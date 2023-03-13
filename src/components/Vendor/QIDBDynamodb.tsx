import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIDBDynamodb: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M19.2 28.79H19.5L24.42 26.33L24.51 26.21V6.54999L24.42 6.42999L19.5 3.98004H19.2V28.77"
      fill="#5294CF"
    />
    <path
      d="M12.8 28.79H12.5L7.58997 26.33L7.48999 26.16V6.66998L7.64001 6.45001L12.55 3.99994H12.86V28.79"
      fill="#1F5B98"
    />
    <path d="M12.5 3.99994H19.5V28.79H12.5V3.99994Z" fill="#2D72B8" />
    <path
      d="M27 15.83H26.83L24.5 15.55L19.58 15.36H12.58L7.66003 15.55V11.8L12.58 10.66H19.58L24.5 11.8L26.3101 12.8V12.18L27.08 12.1L27 11.95L24.58 10.21H24.5L19.58 8.67999H12.58L7.66003 10.21V6.42999L5.07996 9.42999V12.07L5.82996 12.15V12.79L5.06006 13.19V15.82H5.81006V16.92H5.16003H5.04004V19.55L5.81006 19.96V20.6L5.06995 20.68V23.32L7.65002 26.32V22.55L12.5699 24.08H19.5699L24.51 22.55H24.5699L26.97 20.84L27.0699 20.67L26.3 20.59V19.96H26.2L24.5699 20.84L24.51 20.97L19.5699 22.1H12.5699L7.65002 20.96V17.19L12.5699 17.39H19.5699L24.49 17.19H24.61L26.91 16.9999L27.0699 16.92H26.3V15.82H27.0699"
      fill="#1A476F"
    />
    <path
      d="M24.42 22.55V26.33L27 23.33V20.71L24.4399 22.57L24.42 22.55ZM24.4399 20.98L27 19.6V16.97L24.42 17.2V20.98H24.4399ZM24.42 11.85V15.55L27 15.79V13.16L24.4399 11.79L24.42 11.85ZM24.4399 10.2L27 12.05V9.42999L24.42 6.42999V10.21"
      fill="#2D72B8"
    />
  </SvgComponent>
);
