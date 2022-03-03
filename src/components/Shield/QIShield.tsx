import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../../typings';

const QIShield: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2C16 2 12.465 4.43431 10.5454 5.23078C8.72455 5.98629 4 6.66667 4 6.66667L4.00002 14.8333C4.00002 21.9577 9.11998 28.3826 16 30C22.88 28.3826 28 21.9577 28 14.8333V6.66667C28 6.66667 23.2754 5.98629 21.4545 5.23078C19.5349 4.43431 16 2 16 2ZM26 8.37052C25.7014 8.31885 25.3777 8.26092 25.041 8.19769C23.6626 7.93886 21.8216 7.54842 20.688 7.07808C19.5525 6.60695 18.0579 5.71258 16.9411 5.00875C16.5999 4.79375 16.2807 4.58794 16 4.40456C15.7193 4.58794 15.4 4.79375 15.0588 5.00875C13.942 5.71258 12.4474 6.60695 11.3119 7.07808C10.1783 7.54842 8.33736 7.93886 6.95899 8.19769C6.62225 8.26092 6.29855 8.31884 6 8.37051L6.00002 14.8333C6.00002 20.8688 10.2526 26.3586 16 27.9365C21.7473 26.3586 26 20.8688 26 14.8333V8.37052Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIShield;
