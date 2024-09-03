import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIPresumed: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 28C18.2241 28 21.174 26.8264 23.4459 24.883L28.59 30L30 28.59L24.883 23.4459C26.8264 21.174 28 18.2241 28 15C28 7.8203 22.1797 2 15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28ZM18.4901 8.27187C17.5523 7.45 16.3145 7 15.0016 7C13.6886 7 12.4508 7.45312 11.513 8.27187C10.5377 9.125 10 10.2719 10 11.5V12H12L12.0006 11.5C12.0006 10.1219 13.3479 9 15.0016 9C16.6552 9 18.0025 10.1219 18.0025 11.5C18.0025 12.4719 17.3148 13.3625 16.2488 13.7719C15.5861 14.025 15.0234 14.4688 14.6202 15.05C14.2107 15.6438 13.9981 16.3563 13.9981 17.0781V17.75L14 18H15.9987V17.0406C16.0004 16.7373 16.0934 16.4414 16.2657 16.1917C16.438 15.9419 16.6816 15.7499 16.9647 15.6406C18.809 14.9312 20 13.3063 20 11.5C20.0031 10.2719 19.4654 9.125 18.4901 8.27187ZM16.5 21.494C16.5 22.3187 15.8665 23 15.006 23C14.1693 23 13.5 22.3307 13.5 21.494C13.5 20.6454 14.1693 20 15.006 20C15.8546 20 16.5 20.6574 16.5 21.494Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
