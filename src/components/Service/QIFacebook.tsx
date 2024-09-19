import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIFacebook: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_2950_30)" />
    <path
      d="M21.2138 20.2816L21.8357 16.3301H17.9453V13.767C17.9453 12.6857 18.4878 11.6311 20.2302 11.6311H22.0001V8.26699C22.0001 8.26699 20.3946 8 18.8604 8C15.6549 8 13.5618 9.89294 13.5618 13.3184V16.3301H10.0001V20.2816H13.5618V29.8345C14.2768 29.944 15.0083 30 15.7535 30C16.4987 30 17.2303 29.944 17.9453 29.8345V20.2816H21.2138Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2950_30"
        x1="16"
        y1="2"
        x2="16"
        y2="29.917"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#18ACFE" />
        <stop offset="1" stopColor="#0163E0" />
      </linearGradient>
    </defs>
  </SvgComponent>
);
