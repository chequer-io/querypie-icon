import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIApple: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z"
      fill="black"
    />
    <path
      d="M19.0403 7C19.0832 7 19.126 7 19.1712 7C19.2763 8.2694 18.781 9.21789 18.1791 9.90476C17.5885 10.5869 16.7798 11.2485 15.4717 11.1481C15.3845 9.89685 15.8805 9.01871 16.4816 8.33342C17.0391 7.69477 18.0611 7.12647 19.0403 7Z"
      fill="white"
    />
    <path
      d="M23 20.2125C23 20.2251 23 20.2362 23 20.2481C22.6324 21.3372 22.108 22.2707 21.4682 23.137C20.884 23.9235 20.1682 24.9818 18.8901 24.9818C17.7856 24.9818 17.052 24.2871 15.9201 24.2681C14.7228 24.2491 14.0643 24.849 12.9696 25C12.8443 25 12.7191 25 12.5963 25C11.7924 24.8862 11.1436 24.2633 10.671 23.7021C9.27733 22.0439 8.20037 19.9019 8 17.1607C8 16.892 8 16.624 8 16.3553C8.08483 14.3935 9.05919 12.7984 10.3543 12.0254C11.0378 11.6144 11.9774 11.2643 13.0237 11.4208C13.4721 11.4887 13.9302 11.6389 14.3317 11.7875C14.7123 11.9306 15.1881 12.1843 15.639 12.1709C15.9444 12.1622 16.2481 12.0065 16.556 11.8966C17.4576 11.5781 18.3415 11.2129 19.5065 11.3844C20.9067 11.5915 21.9004 12.2001 22.5144 13.1391C21.33 13.8766 20.3936 14.9879 20.5536 16.8857C20.6958 18.6095 21.7202 19.6181 23 20.2125Z"
      fill="white"
    />
  </SvgComponent>
);
