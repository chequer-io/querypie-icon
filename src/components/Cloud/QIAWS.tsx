import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const QIAWS: CustomizedSVGComponent = ({ ...props }) => (
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
      d="M10.1818 14.4587C10.1818 14.7863 10.2177 15.053 10.2798 15.2479C10.3505 15.4427 10.4398 15.6561 10.5639 15.8868C10.6085 15.9576 10.6259 16.0283 10.6259 16.0904C10.6259 16.1786 10.5726 16.2678 10.4572 16.356L9.89881 16.7283C9.81935 16.7816 9.7388 16.8077 9.66804 16.8077C9.57987 16.8077 9.49061 16.7631 9.40244 16.6836C9.27835 16.5508 9.17168 16.4082 9.08351 16.2667C8.99534 16.1154 8.90608 15.9478 8.80811 15.7432C8.11581 16.5595 7.24717 16.9667 6.2011 16.9667C5.45655 16.9667 4.86221 16.7533 4.42681 16.3277C3.99249 15.9021 3.77043 15.3339 3.77043 14.6252C3.77043 13.8709 4.03603 13.2591 4.57702 12.7987C5.11802 12.3382 5.83644 12.1064 6.74971 12.1064C7.05123 12.1064 7.36146 12.1325 7.6902 12.1771C8.01893 12.2218 8.35528 12.2925 8.71014 12.372V11.7243C8.71014 11.0505 8.56864 10.5803 8.29324 10.3049C8.00913 10.0295 7.53018 9.89669 6.84768 9.89669C6.53745 9.89669 6.21743 9.93261 5.88978 10.0121C5.56214 10.0915 5.24211 10.1895 4.93188 10.3136C4.79037 10.3756 4.6837 10.4116 4.62165 10.429C4.55961 10.4464 4.51498 10.4551 4.48014 10.4551C4.35605 10.4551 4.29401 10.3669 4.29401 10.1797V9.74865C4.29401 9.60714 4.31142 9.50047 4.35605 9.43842C4.40068 9.37637 4.48014 9.31433 4.60423 9.25228C4.91446 9.09227 5.28674 8.95947 5.72215 8.85279C6.15538 8.73741 6.61583 8.68407 7.10457 8.68407C8.16044 8.68407 8.93111 8.92355 9.42857 9.4025C9.91623 9.88145 10.1644 10.6086 10.1644 11.5839V14.4576L10.1818 14.4587ZM6.58099 15.8063C6.87381 15.8063 7.17533 15.753 7.49426 15.6463C7.8132 15.5396 8.0973 15.3448 8.33678 15.0792C8.47829 14.9104 8.58496 14.7243 8.6383 14.512C8.69164 14.2987 8.72647 14.0418 8.72647 13.7403V13.368C8.46958 13.3059 8.19418 13.2526 7.91008 13.2167C7.62597 13.1808 7.35167 13.1634 7.07627 13.1634C6.48194 13.1634 6.04762 13.2787 5.7548 13.5182C5.46199 13.7577 5.32048 14.0951 5.32048 14.5382C5.32048 14.9551 5.42716 15.2653 5.64813 15.4786C5.86257 15.6996 6.1728 15.8063 6.58099 15.8063ZM13.7032 16.7642C13.5432 16.7642 13.4376 16.7381 13.3658 16.676C13.295 16.6227 13.233 16.4986 13.1796 16.3299L11.0951 9.47325C11.0418 9.29582 11.0156 9.18044 11.0156 9.11839C11.0156 8.97689 11.0864 8.89633 11.229 8.89633H12.0976C12.2663 8.89633 12.3817 8.92246 12.4438 8.98451C12.5145 9.03784 12.5679 9.16194 12.6212 9.33066L14.1114 15.2022L15.4949 9.33066C15.5395 9.15323 15.5929 9.03784 15.6636 8.98451C15.7344 8.93117 15.8585 8.89633 16.0185 8.89633H16.7282C16.8969 8.89633 17.0123 8.92246 17.0831 8.98451C17.1538 9.03784 17.2159 9.16194 17.2518 9.33066L18.6516 15.274L20.1864 9.33175C20.2398 9.15432 20.3018 9.03893 20.3639 8.98559C20.4346 8.93226 20.55 8.89742 20.71 8.89742H21.5351C21.6766 8.89742 21.7572 8.96818 21.7572 9.11948C21.7572 9.15712 21.751 9.19399 21.7438 9.23661L21.7398 9.26099C21.7311 9.31433 21.7136 9.38508 21.6777 9.48305L19.5388 16.3386C19.4854 16.516 19.4234 16.6314 19.3526 16.6847C19.2819 16.7381 19.1665 16.7729 19.0152 16.7729H18.2521C18.0834 16.7729 17.968 16.7468 17.8973 16.6847C17.8265 16.6227 17.7645 16.5073 17.7286 16.3299L16.3538 10.6097L14.9887 16.3212C14.9441 16.4986 14.8908 16.614 14.82 16.676C14.7493 16.7381 14.6252 16.7642 14.4652 16.7642H13.7032ZM25.1 17.0037C24.6385 17.0037 24.1781 16.9503 23.7339 16.8437C23.2909 16.737 22.9448 16.6216 22.714 16.4888C22.5725 16.4093 22.4745 16.3201 22.4386 16.2406C22.4027 16.1611 22.3853 16.0719 22.3853 15.9924V15.5396C22.3853 15.3535 22.456 15.2642 22.5888 15.2642C22.6421 15.2642 22.6955 15.2729 22.7488 15.2903C22.7808 15.3008 22.8222 15.3179 22.8695 15.3374C22.901 15.3504 22.9352 15.3646 22.9709 15.3785C23.2724 15.5113 23.6011 15.618 23.9462 15.6887C24.3011 15.7595 24.6472 15.7954 25.0021 15.7954C25.5605 15.7954 25.9959 15.6974 26.2974 15.5026C26.5989 15.3077 26.7589 15.0236 26.7589 14.6601C26.7589 14.4119 26.6795 14.2072 26.5195 14.0396C26.3595 13.8709 26.0579 13.7207 25.6236 13.5781L24.3381 13.1786C23.6904 12.975 23.2114 12.6735 22.9186 12.274C22.6258 11.8832 22.4756 11.4489 22.4756 10.9885C22.4756 10.6162 22.5551 10.2875 22.7151 10.0045C22.8751 9.72035 23.0874 9.47216 23.354 9.27732C23.6196 9.07376 23.9212 8.92246 24.276 8.81578C24.6309 8.70911 25.0021 8.66666 25.3928 8.66666C25.5877 8.66666 25.7923 8.67536 25.9872 8.70258C26.1907 8.7287 26.378 8.76462 26.5641 8.80054C26.7415 8.84517 26.9102 8.88872 27.0692 8.94205C27.2281 8.99539 27.3533 9.04873 27.4414 9.10207C27.5655 9.17282 27.6548 9.24357 27.707 9.32413C27.7604 9.39488 27.7865 9.49285 27.7865 9.61694V10.0338C27.7865 10.22 27.7158 10.3179 27.583 10.3179C27.5122 10.3179 27.3968 10.282 27.2455 10.2113C26.7404 9.98051 26.1722 9.86512 25.5431 9.86512C25.038 9.86512 24.6385 9.94458 24.3631 10.1133C24.0877 10.282 23.9462 10.5389 23.9462 10.9025C23.9462 11.1507 24.0344 11.364 24.2118 11.5327C24.3892 11.7015 24.7169 11.8702 25.1871 12.0204L26.4465 12.4199C27.0855 12.6234 27.5459 12.9075 27.8213 13.2711C28.0967 13.6347 28.2295 14.0516 28.2295 14.5131C28.2295 14.8941 28.1501 15.2403 27.9988 15.5418C27.8388 15.8433 27.6265 16.1089 27.3511 16.3222C27.0757 16.5443 26.7481 16.7032 26.3671 16.8186C25.9687 16.9416 25.5518 17.0037 25.1 17.0037ZM26.7763 21.3143C23.858 23.4695 19.6193 24.6136 15.9738 24.6136C10.8654 24.6136 6.26199 22.7239 2.78524 19.5846C2.50984 19.3364 2.75912 18.999 3.08676 19.1938C6.84652 21.3763 11.4858 22.6978 16.284 22.6978C19.5213 22.6978 23.0775 22.024 26.3507 20.6405C26.8384 20.4184 27.2553 20.9594 26.7763 21.3143ZM24.5764 19.8152C25.5256 19.6998 27.6188 19.4516 27.9911 19.9306C28.3634 20.4008 27.5742 22.3787 27.2193 23.256C27.1126 23.5227 27.3434 23.6283 27.5829 23.4247C29.1449 22.112 29.5521 19.3722 29.2331 18.9727C28.9142 18.5819 26.1732 18.2444 24.5056 19.4157C24.2487 19.6018 24.2923 19.8511 24.5764 19.8152Z"
      fill="white"
    />
  </SvgComponent>
);
