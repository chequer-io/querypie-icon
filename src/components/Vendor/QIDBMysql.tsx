import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import type { CustomizedSVGComponent } from '../../../typings';

const QIDBMysql: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M27.7389 27.4276C27.5756 27.2643 27.4123 27.1173 27.2489 26.954C26.7753 26.3179 26.1883 25.7626 25.5513 25.3053C25.0287 24.946 23.8864 24.457 23.6741 23.8527C23.6741 23.8527 23.6577 23.8364 23.6414 23.82C24.0007 23.7874 24.4244 23.6567 24.7674 23.5587C25.3227 23.4117 25.828 23.4444 26.3997 23.2974C26.661 23.2321 26.9223 23.1504 27.1827 23.0687V22.9217C26.8887 22.6277 26.6763 22.2358 26.367 21.9591C25.534 21.2404 24.6204 20.5391 23.6741 19.9511C23.1678 19.6245 22.5154 19.4122 21.9765 19.1345C21.7805 19.0365 21.4538 18.9875 21.3405 18.8242C21.0465 18.4649 20.8831 17.9922 20.6708 17.5675C20.1972 16.6692 19.7408 15.6739 19.3325 14.7276C19.0385 14.0906 18.8589 13.4546 18.5005 12.8666C16.8193 10.092 14.991 8.41075 12.1837 6.76212C11.5794 6.41914 10.8618 6.27214 10.0941 6.09345C9.68583 6.07711 9.27752 6.04445 8.87017 6.02812C8.60886 5.91379 8.34754 5.60347 8.11888 5.45648C7.1889 4.86947 4.78899 3.59553 4.10303 5.27682C3.66206 6.33747 4.75633 7.38276 5.13101 7.92077C5.40866 8.29642 5.76798 8.7201 5.96397 9.14475C6.07829 9.4224 6.11096 9.71639 6.22528 10.0094C6.4866 10.7271 6.73159 11.5274 7.07457 12.197C7.25423 12.54 7.45022 12.8984 7.67887 13.2087C7.80953 13.3883 8.03818 13.47 8.08718 13.764C7.85853 14.0906 7.84219 14.5806 7.71153 14.988C7.12357 16.8326 7.35222 19.1182 8.18517 20.4728C8.44649 20.8811 9.06616 21.7785 9.89912 21.4355C10.6341 21.1415 10.4708 20.2115 10.6821 19.3949C10.7311 19.1989 10.6984 19.0682 10.7964 18.9376V18.9702C11.0251 19.4275 11.2537 19.8675 11.4661 20.3249C11.9724 21.1242 12.8534 21.9572 13.5883 22.5125C13.9803 22.8064 14.2906 23.3118 14.7796 23.4915V23.4425H14.747C14.649 23.2955 14.502 23.2301 14.3713 23.1158C14.0773 22.8218 13.7507 22.4635 13.523 22.1368C12.838 21.2222 12.2337 20.2105 11.6947 19.1662C11.4334 18.6599 11.2047 18.1056 10.9924 17.5992C10.8944 17.4033 10.8944 17.1093 10.7311 17.0113C10.4861 17.3706 10.1268 17.6809 9.94715 18.1209C9.63684 18.8232 9.60417 19.6879 9.48985 20.5852C9.42452 20.6016 9.45718 20.5852 9.42452 20.6179C8.90188 20.4872 8.72318 19.9482 8.52719 19.4919C8.03722 18.3332 7.95556 16.4723 8.3802 15.134C8.49453 14.791 8.9845 13.714 8.78851 13.3874C8.69052 13.077 8.36387 12.8974 8.18421 12.6524C7.97189 12.3421 7.74324 11.9511 7.59625 11.6081C7.20427 10.6944 7.00828 9.6818 6.5846 8.76814C6.38861 8.34349 6.04563 7.90348 5.76798 7.5115C5.45766 7.07052 5.11468 6.7602 4.87066 6.23852C4.78899 6.05886 4.67467 5.76487 4.80533 5.56888C4.83799 5.44014 4.90332 5.39115 5.03398 5.35848C5.2463 5.17882 5.8506 5.40748 6.06196 5.50547C6.66626 5.75046 7.1716 5.97912 7.67791 6.3221C7.90656 6.48543 8.15155 6.79575 8.44457 6.87741H8.78755C9.31019 6.99174 9.8972 6.91007 10.3872 7.05707C11.2528 7.33472 12.0358 7.74303 12.7381 8.18305C14.8767 9.53769 16.6396 11.464 17.8309 13.7659C18.0269 14.1415 18.1086 14.4845 18.2882 14.8756C18.6312 15.6758 19.0558 16.4915 19.3979 17.2755C19.7408 18.0421 20.0675 18.8261 20.5565 19.4631C20.8015 19.8061 21.7805 19.9857 22.2214 20.1654C22.5481 20.3124 23.0544 20.443 23.3474 20.6227C23.9027 20.9657 24.4571 21.3577 24.9797 21.7323C25.241 21.9283 26.0567 22.3366 26.1057 22.6623C24.8 22.6297 23.7874 22.7603 22.9391 23.1196C22.6941 23.2176 22.3021 23.2176 22.2695 23.528C22.4001 23.6586 22.4165 23.8709 22.5308 24.0506C22.7268 24.3773 23.0698 24.8182 23.3791 25.0469C23.7221 25.3082 24.0651 25.5695 24.4234 25.7972C25.0604 26.1892 25.7781 26.4179 26.3987 26.8089C26.758 27.0375 27.1164 27.3315 27.4757 27.5765C27.6553 27.7072 27.7697 27.9195 27.9983 28.0012V27.9522C27.8859 27.8032 27.8532 27.5909 27.7389 27.4276Z"
      fill="#00618A"
    />
    <path
      d="M9.45697 8.47598C9.17933 8.47598 8.98335 8.50865 8.78833 8.55764V8.59031H8.82099C8.95165 8.85162 9.18029 9.03127 9.34361 9.25991C9.47427 9.52122 9.58859 9.78253 9.71924 10.0438C9.73557 10.0275 9.75191 10.0112 9.75191 10.0112C9.98055 9.84786 10.0949 9.58655 10.0949 9.19459C9.99688 9.08026 9.98055 8.96594 9.89889 8.85162C9.79994 8.6883 9.58763 8.60664 9.45697 8.47598Z"
      fill="#00618A"
    />
  </SvgComponent>
);

export default QIDBMysql;
