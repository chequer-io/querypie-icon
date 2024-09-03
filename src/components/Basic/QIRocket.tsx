import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIRocket: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <path
      d="M16.63 29.93C16.7478 29.9765 16.8733 30.0003 17 30C17.2255 29.9987 17.444 29.9212 17.62 29.78L22.62 25.78C22.7378 25.6869 22.8332 25.5684 22.8989 25.4334C22.9647 25.2983 22.9993 25.1502 23 25V17.41L26.78 13.64C27.8049 12.6208 28.6172 11.4083 29.17 10.0728C29.7227 8.73732 30.0048 7.30537 30 5.86V4C30 3.46957 29.7892 2.96086 29.4142 2.58579C29.0391 2.21071 28.5304 2 28 2H26.14C24.6946 1.99513 23.2626 2.27724 21.9271 2.82999C20.5916 3.38273 19.3791 4.19511 18.3599 5.22L14.59 9H6.99996C6.85234 9.00485 6.70763 9.04234 6.57622 9.10977C6.44481 9.17721 6.32996 9.2729 6.23995 9.39L2.23995 14.39C2.12834 14.5283 2.05562 14.6939 2.02925 14.8696C2.00289 15.0454 2.02383 15.225 2.08995 15.39C2.15526 15.5538 2.26274 15.6975 2.40148 15.8064C2.54022 15.9153 2.7053 15.9855 2.87996 16.01L9.87996 17.01L10.16 15.01L4.88997 14.26L7.49996 11H15.0199C15.1516 11.0008 15.282 10.9755 15.4039 10.9258C15.5257 10.876 15.6365 10.8027 15.73 10.71L19.7999 6.64C20.6329 5.80136 21.6239 5.13623 22.7156 4.68308C23.8072 4.22992 24.978 3.99775 26.16 4H28.0199V5.86C28.0222 7.042 27.79 8.2127 27.3369 9.30438C26.8837 10.3961 26.2186 11.3871 25.38 12.22L21.31 16.29C21.2173 16.3834 21.144 16.4943 21.0942 16.6161C21.0444 16.7379 21.0192 16.8684 21.0199 17V24.52L17.76 27.13L17.01 21.86L15.01 22.14L16.01 29.14C16.0345 29.3147 16.1047 29.4797 16.2136 29.6185C16.3225 29.7572 16.4661 29.8647 16.63 29.93Z"
      fill="#7E848A"
    />
    <path
      d="M7.29486 23.2975L15.2922 15.3001L16.7065 16.7143L8.70907 24.7117L7.29486 23.2975Z"
      fill="#7E848A"
    />
  </SvgComponent>
);
