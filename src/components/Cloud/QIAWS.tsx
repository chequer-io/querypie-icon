import React from 'react';
import SvgComponent from '../../common/SvgComponent';

const QIAWS: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="querypie-icon"
    data-qi-color-controllable="false"
    {...props}
  >
    <path
      d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4Z"
      fill="#FF9900"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.1819 14.4587C10.1819 14.7864 10.2179 15.0531 10.2799 15.2479C10.3507 15.4428 10.4399 15.6561 10.564 15.8869C10.6086 15.9576 10.6261 16.0284 10.6261 16.0904C10.6261 16.1786 10.5727 16.2679 10.4573 16.356L9.89893 16.7283C9.81947 16.7816 9.73892 16.8078 9.66816 16.8078C9.57999 16.8078 9.49074 16.7631 9.40257 16.6837C9.27847 16.5509 9.1718 16.4083 9.08363 16.2668C8.99546 16.1155 8.9062 15.9478 8.80823 15.7432C8.11593 16.5596 7.24729 16.9667 6.20122 16.9667C5.45667 16.9667 4.86234 16.7533 4.42693 16.3277C3.99261 15.9021 3.77055 15.3339 3.77055 14.6253C3.77055 13.8709 4.03615 13.2592 4.57714 12.7987C5.11814 12.3383 5.83657 12.1064 6.74984 12.1064C7.05136 12.1064 7.36159 12.1325 7.69032 12.1772C8.01905 12.2218 8.35541 12.2926 8.71027 12.372V11.7244C8.71027 11.0506 8.56876 10.5803 8.29336 10.3049C8.00926 10.0295 7.53031 9.89672 6.8478 9.89672C6.53757 9.89672 6.21755 9.93264 5.8899 10.0121C5.56226 10.0916 5.24223 10.1895 4.932 10.3136C4.79049 10.3757 4.68382 10.4116 4.62177 10.429C4.55973 10.4464 4.5151 10.4551 4.48027 10.4551C4.35617 10.4551 4.29413 10.367 4.29413 10.1797V9.74868C4.29413 9.60717 4.31154 9.5005 4.35617 9.43845C4.4008 9.37641 4.48027 9.31436 4.60436 9.25231C4.91459 9.0923 5.28686 8.9595 5.72227 8.85282C6.1555 8.73744 6.61595 8.6841 7.10469 8.6841C8.16056 8.6841 8.93124 8.92358 9.42869 9.40253C9.91635 9.88148 10.1645 10.6086 10.1645 11.5839V14.4576L10.1819 14.4587ZM6.58111 15.8063C6.87393 15.8063 7.17545 15.753 7.49438 15.6463C7.81332 15.5396 8.09743 15.3448 8.3369 15.0792C8.47841 14.9105 8.58508 14.7243 8.63842 14.5121C8.69176 14.2987 8.72659 14.0418 8.72659 13.7403V13.368C8.4697 13.306 8.19431 13.2526 7.9102 13.2167C7.6261 13.1808 7.35179 13.1634 7.07639 13.1634C6.48206 13.1634 6.04774 13.2788 5.75493 13.5182C5.46211 13.7577 5.32061 14.0952 5.32061 14.5382C5.32061 14.9551 5.42728 15.2653 5.64825 15.4787C5.86269 15.6996 6.17292 15.8063 6.58111 15.8063ZM13.7033 16.7642C13.5433 16.7642 13.4377 16.7381 13.3659 16.676C13.2951 16.6227 13.2331 16.4986 13.1797 16.3299L11.0952 9.47328C11.0419 9.29585 11.0158 9.18047 11.0158 9.11842C11.0158 8.97692 11.0865 8.89637 11.2291 8.89637H12.0977C12.2665 8.89637 12.3819 8.92249 12.4439 8.98454C12.5147 9.03787 12.568 9.16197 12.6213 9.33069L14.1115 15.2022L15.495 9.33069C15.5397 9.15326 15.593 9.03787 15.6637 8.98454C15.7345 8.9312 15.8586 8.89637 16.0186 8.89637H16.7283C16.897 8.89637 17.0124 8.92249 17.0832 8.98454C17.1539 9.03787 17.216 9.16197 17.2519 9.33069L18.6517 15.274L20.1866 9.33178C20.2399 9.15435 20.3019 9.03896 20.364 8.98562C20.4347 8.93229 20.5501 8.89745 20.7101 8.89745H21.5352C21.6767 8.89745 21.7573 8.96821 21.7573 9.11951C21.7573 9.15715 21.7511 9.19402 21.7439 9.23664L21.7399 9.26102C21.7312 9.31436 21.7138 9.38511 21.6778 9.48308L19.5389 16.3386C19.4856 16.516 19.4235 16.6314 19.3528 16.6848C19.282 16.7381 19.1666 16.7729 19.0153 16.7729H18.2523C18.0835 16.7729 17.9682 16.7468 17.8974 16.6848C17.8266 16.6227 17.7646 16.5073 17.7287 16.3299L16.3539 10.6097L14.9889 16.3212C14.9442 16.4986 14.8909 16.614 14.8201 16.676C14.7494 16.7381 14.6253 16.7642 14.4653 16.7642H13.7033ZM25.1002 17.0037C24.6386 17.0037 24.1782 16.9504 23.7341 16.8437C23.291 16.737 22.9449 16.6216 22.7141 16.4888C22.5726 16.4094 22.4746 16.3201 22.4387 16.2406C22.4028 16.1612 22.3854 16.0719 22.3854 15.9925V15.5396C22.3854 15.3535 22.4561 15.2642 22.5889 15.2642C22.6423 15.2642 22.6956 15.2729 22.7489 15.2904C22.781 15.3008 22.8224 15.3179 22.8697 15.3375C22.9011 15.3505 22.9354 15.3646 22.971 15.3785C23.2725 15.5113 23.6013 15.618 23.9463 15.6888C24.3012 15.7595 24.6473 15.7954 25.0022 15.7954C25.5606 15.7954 25.996 15.6975 26.2975 15.5026C26.599 15.3078 26.7591 15.0237 26.7591 14.6601C26.7591 14.4119 26.6796 14.2073 26.5196 14.0396C26.3596 13.8709 26.0581 13.7207 25.6237 13.5781L24.3382 13.1786C23.6905 12.9751 23.2116 12.6735 22.9188 12.2741C22.6259 11.8833 22.4757 11.449 22.4757 10.9885C22.4757 10.6162 22.5552 10.2875 22.7152 10.0045C22.8752 9.72038 23.0875 9.4722 23.3542 9.27735C23.6198 9.0738 23.9213 8.92249 24.2761 8.81581C24.631 8.70914 25.0022 8.66669 25.393 8.66669C25.5878 8.66669 25.7925 8.6754 25.9873 8.70261C26.1909 8.72873 26.3781 8.76465 26.5642 8.80058C26.7416 8.84521 26.9104 8.88875 27.0693 8.94208C27.2282 8.99542 27.3534 9.04876 27.4416 9.1021C27.5657 9.17285 27.6549 9.24361 27.7072 9.32416C27.7605 9.39491 27.7866 9.49288 27.7866 9.61697V10.0339C27.7866 10.22 27.7159 10.318 27.5831 10.318C27.5123 10.318 27.3969 10.2821 27.2456 10.2113C26.7406 9.98054 26.1723 9.86515 25.5432 9.86515C25.0381 9.86515 24.6386 9.94461 24.3632 10.1133C24.0878 10.2821 23.9463 10.5389 23.9463 10.9025C23.9463 11.1507 24.0345 11.3641 24.2119 11.5328C24.3893 11.7015 24.717 11.8702 25.1872 12.0204L26.4467 12.4199C27.0856 12.6235 27.5461 12.9076 27.8215 13.2711C28.0969 13.6347 28.2297 14.0516 28.2297 14.5132C28.2297 14.8941 28.1502 15.2403 27.9989 15.5418C27.8389 15.8433 27.6266 16.1089 27.3512 16.3223C27.0758 16.5443 26.7482 16.7033 26.3672 16.8186C25.9688 16.9417 25.5519 17.0037 25.1002 17.0037ZM26.7764 21.3143C23.8581 23.4696 19.6194 24.6136 15.9739 24.6136C10.8655 24.6136 6.26211 22.7239 2.78536 19.5846C2.50997 19.3365 2.75924 18.999 3.08688 19.1939C6.84665 21.3763 11.4859 22.6978 16.2842 22.6978C19.5214 22.6978 23.0776 22.024 26.3508 20.6405C26.8385 20.4184 27.2554 20.9594 26.7764 21.3143ZM24.5765 19.8152C25.5257 19.6998 27.6189 19.4516 27.9912 19.9306C28.3635 20.4008 27.5743 22.3787 27.2194 23.2561C27.1128 23.5227 27.3435 23.6283 27.583 23.4248C29.1451 22.112 29.5522 19.3722 29.2332 18.9727C28.9143 18.5819 26.1734 18.2445 24.5057 19.4157C24.2488 19.6019 24.2924 19.8511 24.5765 19.8152Z"
      fill="white"
    />
  </SvgComponent>
);

export default QIAWS;
