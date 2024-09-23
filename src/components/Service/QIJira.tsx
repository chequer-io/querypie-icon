import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIJira: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M26.9229 4H14.4055C14.4055 7.12 16.9308 9.64633 20.0516 9.64633H22.3537V11.8742C22.3537 14.9942 24.88 17.5205 28 17.5205V5.0771C27.9998 4.7915 27.8862 4.51766 27.6843 4.31571C27.4823 4.11376 27.2085 4.00022 26.9229 4Z"
      fill="#2684FF"
    />
    <path
      d="M20.7204 10.24H8.20276C8.20276 13.3597 10.7283 15.8861 13.848 15.8861H16.1512V18.1139C16.1512 21.2339 18.6775 23.7603 21.7975 23.7603V11.3168C21.7971 11.0313 21.6834 10.7576 21.4815 10.5557C21.2796 10.3538 21.0059 10.2404 20.7204 10.24Z"
      fill="url(#paint0_linear_2950_105)"
    />
    <path
      d="M14.5176 16.4795H2C2 19.6006 4.52525 22.1258 7.64633 22.1258H9.94841V24.3548C9.94841 27.4748 12.4747 30 15.5945 30V17.5577C15.5942 17.2721 15.4807 16.9982 15.2788 16.7962C15.077 16.5941 14.8032 16.4801 14.5176 16.4795Z"
      fill="url(#paint1_linear_2950_105)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_2950_105"
        x1="21.5369"
        y1="10.2541"
        x2="16.2113"
        y2="15.7455"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.176" stopColor="#0052CC" />
        <stop offset="1" stopColor="#2684FF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_2950_105"
        x1="15.6944"
        y1="16.5277"
        x2="9.53674"
        y2="22.5185"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.176" stopColor="#0052CC" />
        <stop offset="1" stopColor="#2684FF" />
      </linearGradient>
    </defs>
  </SvgComponent>
);