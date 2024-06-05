import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIPartialConfirmed: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.4459 24.883C21.174 26.8264 18.2241 28 15 28C7.8203 28 2 22.1797 2 15C2 7.8203 7.8203 2 15 2C22.1797 2 28 7.8203 28 15C28 18.2241 26.8264 21.174 24.883 23.4459L30 28.59L28.59 30L23.4459 24.883ZM20.4489 12.2057L22.8303 14.5877C23.0566 14.8142 23.0566 15.1851 22.8303 15.4123L20.4489 17.7943C20.222 18.0208 19.9795 17.9504 19.9088 17.6372C19.9088 17.6372 19.8512 17.3786 19.5331 17.0605C18.8503 16.377 17.7431 16.378 17.0605 17.0605C16.3777 17.7437 16.3774 18.8505 17.0605 19.5337C17.3783 19.8511 17.6372 19.9093 17.6372 19.9093C17.9495 19.9791 18.0202 20.2226 17.7936 20.4492L15.4119 22.8298C15.1854 23.0567 14.8142 23.0567 14.5876 22.8298L12.2063 20.4498C11.98 20.2223 11.7372 20.2924 11.6668 20.6057C11.6668 20.6057 11.6092 20.8636 11.2908 21.1816C10.6079 21.8648 9.50073 21.8642 8.8182 21.1816C8.13533 20.4991 8.13533 19.3923 8.8182 18.7091C9.1363 18.3913 9.39451 18.3328 9.39451 18.3328C9.70714 18.2624 9.77754 18.0195 9.55098 17.793L7.16992 15.4117C6.94336 15.1854 6.94336 14.8146 7.16992 14.588L9.55098 12.2067C9.77751 11.9801 10.0207 12.0502 10.0908 12.3632C10.0908 12.3632 10.149 12.6214 10.4668 12.9398C11.1487 13.6217 12.2568 13.6223 12.9394 12.9398C13.6222 12.2566 13.6213 11.1492 12.9394 10.4666C12.6216 10.1492 12.363 10.091 12.363 10.091C12.0504 10.0209 11.9804 9.77803 12.2066 9.55084L14.5876 7.17016C14.8142 6.94328 15.1854 6.94328 15.4119 7.17016L17.7933 9.55016C18.0195 9.77734 18.2624 9.70725 18.3328 9.394C18.3328 9.394 18.3908 9.13609 18.7088 8.81803C19.392 8.13519 20.4985 8.13519 21.1817 8.81803C21.8639 9.49959 21.8646 10.6077 21.1817 11.2902C20.8636 11.6083 20.6054 11.6665 20.6054 11.6665C20.2928 11.7369 20.2221 11.9792 20.4489 12.2057Z"
      fill="#818589"
    />
  </SvgComponent>
);
