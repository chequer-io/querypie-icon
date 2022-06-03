import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIBreakingChanges: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26 9H4V24H16V26H4C2.9 26 2 25.1 2 24V4C2 2.9 2.9 2 4 2H26C27.1 2 28 2.9 28 4V16H26V9ZM26 4H4V7H26V4ZM25 19C28.31 19 31 21.69 31 25C31 28.31 28.31 31 25 31C21.69 31 19 28.31 19 25C19 21.69 21.69 19 25 19ZM28.43 27.02C28.78 26.42 29 25.74 29 25C29 22.79 27.21 21 25 21C24.26 21 23.57 21.22 22.98 21.57L28.43 27.02ZM21.57 22.98C21.22 23.58 21 24.26 21 25C21 27.21 22.79 29 25 29C25.74 29 26.43 28.78 27.02 28.43L21.57 22.98ZM10.41 16L13 13.41L11.58 12L7.57996 16L11.58 20L13 18.59L10.41 16ZM17 18.59L19.59 16L17 13.41L18.42 12L22.42 16L18.42 20L17 18.59Z"
      fill="#656C72"
    />
  </SvgComponent>
);
