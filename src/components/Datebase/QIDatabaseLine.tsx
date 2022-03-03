import React from 'react';
import SvgComponent from '../../common/SvgComponent';

const QIDatabaseLine: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.961 7.12604C25.9995 7.04772 26 7.01059 26 7C26 6.98941 25.9995 6.95228 25.961 6.87396C25.919 6.78844 25.8303 6.65282 25.6534 6.47856C25.2882 6.1188 24.6572 5.70276 23.7161 5.31062C21.8425 4.52998 19.1156 4 16 4C12.8844 4 10.1575 4.52998 8.28395 5.31062C7.34282 5.70276 6.71178 6.1188 6.34659 6.47856C6.16969 6.65282 6.08099 6.78844 6.03899 6.87396C6.00053 6.95228 6 6.98941 6 7C6 7.01059 6.00053 7.04772 6.03899 7.12604C6.08099 7.21156 6.16969 7.34718 6.34659 7.52144C6.71178 7.8812 7.34282 8.29724 8.28395 8.68938C10.1575 9.47002 12.8844 10 16 10C19.1156 10 21.8425 9.47002 23.7161 8.68938C24.6572 8.29724 25.2882 7.8812 25.6534 7.52144C25.8303 7.34718 25.919 7.21156 25.961 7.12604ZM26 9.76483C23.8502 11.1121 20.1739 12 16 12C11.8261 12 8.14984 11.1121 6 9.76483V16C6 16.0106 6.00053 16.0477 6.03899 16.126C6.08099 16.2116 6.16969 16.3472 6.34659 16.5214C6.71178 16.8812 7.34282 17.2972 8.28395 17.6894C10.1575 18.47 12.8844 19 16 19C19.1156 19 21.8425 18.47 23.7161 17.6894C24.6572 17.2972 25.2882 16.8812 25.6534 16.5214C25.8303 16.3472 25.919 16.2116 25.961 16.126C25.9995 16.0477 26 16.0106 26 16V9.76483ZM28 16V7C28 4.23858 22.6274 2 16 2C9.37258 2 4 4.23858 4 7V16V25C4 27.7614 9.37258 30 16 30C22.6274 30 28 27.7614 28 25V16ZM26 18.7648C23.8502 20.1121 20.1739 21 16 21C11.8261 21 8.14984 20.1121 6 18.7648V25C6 25.0106 6.00053 25.0477 6.03899 25.126C6.08099 25.2116 6.16969 25.3472 6.34659 25.5214C6.71178 25.8812 7.34282 26.2972 8.28395 26.6894C10.1575 27.47 12.8844 28 16 28C19.1156 28 21.8425 27.47 23.7161 26.6894C24.6572 26.2972 25.2882 25.8812 25.6534 25.5214C25.8303 25.3472 25.919 25.2116 25.961 25.126C25.9995 25.0477 26 25.0106 26 25V18.7648Z"
      fill="black"
    />
  </SvgComponent>
);

export default QIDatabaseLine;
