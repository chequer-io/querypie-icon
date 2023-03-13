import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QISecurity_Legacy: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5454 5.23078C12.465 4.43431 16 2 16 2C16 2 19.5349 4.43431 21.4545 5.23078C23.2754 5.98629 28 6.66667 28 6.66667V14.8333C28 21.9577 22.88 28.3826 16 30C9.11998 28.3826 4.00002 21.9577 4.00002 14.8333L4 6.66667C4 6.66667 8.72455 5.98629 10.5454 5.23078ZM25.041 8.19769C25.3777 8.26092 25.7014 8.31885 26 8.37052V14.8333C26 20.8688 21.7473 26.3586 16 27.9365C10.2526 26.3586 6.00002 20.8688 6.00002 14.8333L6 8.37051C6.29855 8.31884 6.62225 8.26092 6.95899 8.19769C8.33736 7.93886 10.1783 7.54842 11.3119 7.07808C12.4474 6.60695 13.942 5.71258 15.0588 5.00875C15.4 4.79375 15.7193 4.58794 16 4.40456C16.2807 4.58794 16.5999 4.79375 16.9411 5.00875C18.0579 5.71258 19.5525 6.60695 20.688 7.07808C21.8216 7.54842 23.6626 7.93886 25.041 8.19769ZM14.5 11.5C14.5 10.6716 15.1716 10 16 10C16.8284 10 17.5 10.6716 17.5 11.5V14H14.5V11.5ZM12.5 14V11.5C12.5 9.567 14.067 8 16 8C17.933 8 19.5 9.567 19.5 11.5V14H20.5C21.6046 14 22.5 14.8954 22.5 16V21C22.5 22.1046 21.6046 23 20.5 23H11.5C10.3954 23 9.5 22.1046 9.5 21V16C9.5 14.8954 10.3954 14 11.5 14H12.5ZM11.5 21V16H20.5V21H11.5Z"
      fill="#656C72"
    />
  </SvgComponent>
);
