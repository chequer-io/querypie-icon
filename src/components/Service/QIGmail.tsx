import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIGmail: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <g filter="url(#filter0_d_2950_64)">
      <path
        d="M23.7017 6.93799L16.0817 12.8847L8.28754 6.93799V6.9396L8.29696 6.94763V15.2747L15.9938 21.35L23.7017 15.5093V6.93799Z"
        fill="#EA4335"
      />
      <path
        d="M25.7027 5.49176L23.7015 6.93827V15.5096L29.9984 10.6751V7.76277C29.9984 7.76277 29.2341 3.60328 25.7027 5.49176Z"
        fill="#FBBC05"
      />
      <path
        d="M23.7015 15.5084V26.6255H28.5278C28.5278 26.6255 29.9011 26.4841 30 24.9187V10.6738L23.7015 15.5084Z"
        fill="#34A853"
      />
      <path
        d="M8.29731 26.6371V15.2756L8.28754 15.2676L8.29731 26.6371Z"
        fill="#C5221F"
      />
      <path
        d="M8.28746 6.94063L6.29732 5.50216C2.76592 3.61367 2 7.77156 2 7.77156V10.6839L8.28746 15.2677V6.94063Z"
        fill="#C5221F"
      />
      <path
        d="M8.28754 6.94141V15.2684L8.29731 15.2765V6.94944L8.28754 6.94141Z"
        fill="#C5221F"
      />
      <path
        d="M2 10.6841V24.9289C2.09731 26.496 3.4722 26.6358 3.4722 26.6358H8.29845L8.28746 15.2663L2 10.6841Z"
        fill="#4285F4"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_2950_64"
        x="-2"
        y="-1"
        width="36"
        height="36"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_2950_64"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_2950_64"
          result="shape"
        />
      </filter>
    </defs>
  </SvgComponent>
);