import * as React from 'react';
import SvgComponent from '../../common/SvgComponent';
import { CustomizedSVGComponent } from '../../typings';

export const Kubernetes: CustomizedSVGComponent = ({ ...props }) => (
  <SvgComponent
    viewBox="0 0 32 32"
    role="qp-icon"
    data-qi-color-controllable="true"
    {...props}
  >
    <rect x="2" y="2" width="28" height="28" rx="4" fill="#9C72E2" />
    <path
      d="M25.462 17.6016C25.432 17.6016 25.402 17.6016 25.402 17.5723C25.402 17.5431 25.342 17.5431 25.2819 17.5431C25.1619 17.5138 25.0419 17.5138 24.9197 17.5138C24.8597 17.5138 24.7997 17.5138 24.7397 17.4846H24.7096C24.3774 17.4553 24.0173 17.3968 23.6851 17.3091C23.5951 17.2798 23.505 17.1921 23.475 17.1043L23.235 17.0458C23.355 16.1933 23.295 15.3137 23.1149 14.4613C22.9049 13.6088 22.5426 12.7877 22.0603 12.0543L22.2404 11.8788V11.8496C22.2404 11.7618 22.2704 11.6448 22.3304 11.5863C22.6005 11.3523 22.8727 11.1747 23.1728 10.9992C23.2328 10.9699 23.2928 10.9407 23.3528 10.9114C23.4729 10.8529 23.5629 10.7944 23.6851 10.7359C23.7151 10.7067 23.7451 10.7067 23.7751 10.6774C23.8051 10.6482 23.7751 10.6482 23.7751 10.6189C24.0452 10.4142 24.1073 10.0611 23.8951 9.7978C23.8051 9.68079 23.6251 9.59304 23.4729 9.59304C23.3228 9.59304 23.1706 9.65154 23.0506 9.7393L23.0206 9.76855C22.9906 9.7978 22.9606 9.82705 22.9306 9.82705C22.8406 9.9148 22.7505 10.0026 22.6905 10.0903C22.6605 10.1488 22.6005 10.1781 22.5705 10.2073C22.3604 10.4413 22.0882 10.6774 21.8181 10.8529C21.7581 10.8822 21.6981 10.9114 21.6381 10.9114C21.6081 10.9114 21.5481 10.9114 21.5181 10.8822H21.488L21.248 11.0284C21.0079 10.7944 20.7357 10.5583 20.4956 10.3243C19.381 9.47186 17.9964 8.94534 16.5796 8.79699L16.5495 8.56298V8.59224C16.4595 8.53373 16.4295 8.44598 16.3995 8.35823C16.3995 8.03438 16.3995 7.71261 16.4595 7.35951V7.33026C16.4595 7.27176 16.4895 7.21326 16.4895 7.15475C16.5195 7.03775 16.5195 6.92075 16.5495 6.80165V6.62197C16.5796 6.32737 16.3395 6.03486 16.0373 6.0056C15.8572 5.97635 15.675 6.06411 15.525 6.21036C15.4049 6.32737 15.3449 6.47362 15.3449 6.62197V6.76822C15.3449 6.88523 15.3749 7.00223 15.4049 7.12132C15.435 7.17983 15.435 7.23833 15.435 7.29683V7.32608C15.495 7.64993 15.495 7.97169 15.495 8.3248C15.465 8.41255 15.435 8.5003 15.3449 8.55881V8.61731L15.3149 8.85132C14.9827 8.88057 14.6526 8.93907 14.2904 8.99757C12.8757 9.29217 11.5789 10.0255 10.5865 11.0535L10.4064 10.9365H10.3764C10.3464 10.9365 10.3164 10.9658 10.2564 10.9658C10.1964 10.9658 10.1364 10.9365 10.0763 10.9072C9.80626 10.7025 9.53404 10.4664 9.32398 10.2324C9.29398 10.1739 9.23396 10.1446 9.20395 10.1154C9.11393 10.0276 9.05391 9.93987 8.96389 9.85212C8.93388 9.82287 8.90387 9.82287 8.87386 9.79362C8.84385 9.76437 8.84385 9.76437 8.84385 9.76437C8.72382 9.67661 8.57378 9.61811 8.42159 9.61811C8.24154 9.61811 8.08936 9.67661 7.99933 9.82287C7.81928 10.0861 7.8793 10.4392 8.11937 10.644C8.14938 10.644 8.14938 10.6732 8.14938 10.6732C8.14938 10.6732 8.20939 10.7317 8.2394 10.7317C8.32942 10.7902 8.44946 10.8487 8.57163 10.9072C8.63165 10.9365 8.69167 10.9658 8.75168 10.995C9.05391 11.1705 9.35399 11.3481 9.59406 11.5821C9.65407 11.6406 9.71409 11.7576 9.68408 11.8454V11.8161L9.86413 11.9916C9.83412 12.0501 9.80412 12.0794 9.77411 12.1379C8.83957 13.5775 8.44946 15.2803 8.71953 16.9539L8.47947 17.0124C8.47947 17.0416 8.44946 17.0416 8.44946 17.0416C8.41945 17.1294 8.32942 17.1879 8.2394 17.2464C7.90717 17.3341 7.57707 17.3926 7.21483 17.4219C7.15482 17.4219 7.0948 17.4219 7.03478 17.4511C6.91475 17.4511 6.79472 17.4804 6.67254 17.4804C6.64253 17.4804 6.61252 17.5096 6.55251 17.5096C6.5225 17.5096 6.5225 17.5096 6.49249 17.5389C6.16026 17.5974 5.9502 17.892 6.01022 18.2137C6.07023 18.477 6.34245 18.6546 6.61252 18.6254C6.67254 18.6254 6.70255 18.6254 6.76257 18.5961C6.79257 18.5961 6.79257 18.5961 6.79257 18.5669C6.79257 18.5376 6.8826 18.5669 6.91261 18.5669C7.03264 18.5376 7.15267 18.4791 7.24484 18.4498C7.30486 18.4206 7.36487 18.3913 7.42489 18.3913H7.4549C7.78713 18.2743 8.08722 18.1866 8.44946 18.1281H8.47947C8.56949 18.1281 8.65952 18.1573 8.71953 18.2158C8.74954 18.2158 8.74954 18.2451 8.74954 18.2451L9.01961 18.2158C9.47188 19.5656 10.3143 20.7711 11.4889 21.6508C11.7589 21.8555 12.0011 22.0331 12.3012 22.1794L12.1512 22.3841C12.1512 22.4134 12.1812 22.4134 12.1812 22.4134C12.2412 22.5011 12.2412 22.6181 12.2112 22.708C12.0912 23.0026 11.909 23.2951 11.7289 23.5604V23.5897C11.6989 23.6482 11.6689 23.6774 11.6089 23.7359C11.5489 23.7944 11.4889 23.9114 11.3988 24.0305C11.3688 24.0598 11.3688 24.089 11.3388 24.1183C11.3388 24.1183 11.3388 24.1475 11.3088 24.1475C11.1588 24.4421 11.2788 24.7932 11.5489 24.9394C11.6089 24.9687 11.6989 24.9979 11.7589 24.9979C11.999 24.9979 12.2112 24.8517 12.3312 24.6448C12.3312 24.6448 12.3312 24.6156 12.3612 24.6156C12.3612 24.5863 12.3913 24.5571 12.4213 24.5278C12.4513 24.4108 12.5113 24.323 12.5413 24.204L12.6013 24.0284C12.6913 23.7046 12.8414 23.4121 12.9936 23.1175C13.0536 23.0297 13.1436 22.9712 13.2336 22.942C13.2636 22.942 13.2636 22.942 13.2636 22.9127L13.3837 22.6787C14.226 23.0026 15.1006 23.1488 16.003 23.1488C16.5453 23.1488 17.0875 23.0903 17.6298 22.9441C17.9621 22.8856 18.2922 22.7686 18.5944 22.6808L18.7144 22.8856C18.7444 22.8856 18.7444 22.8856 18.7444 22.9148C18.8345 22.9441 18.9245 23.0026 18.9845 23.0903C19.1345 23.3849 19.2867 23.6774 19.3767 24.0013V24.0305L19.4368 24.206C19.4668 24.323 19.4968 24.4401 19.5568 24.5299C19.5868 24.5591 19.5868 24.5884 19.6168 24.6176C19.6168 24.6176 19.6168 24.6469 19.6468 24.6469C19.7669 24.8517 19.9791 25 20.2191 25C20.3091 25 20.3692 24.9707 20.4592 24.9415C20.5792 24.883 20.6993 24.766 20.7293 24.6176C20.7593 24.4714 20.7593 24.323 20.6993 24.1768C20.6993 24.1475 20.6692 24.1475 20.6692 24.1475C20.6692 24.1183 20.6392 24.089 20.6092 24.0598C20.5492 23.9428 20.4892 23.855 20.3992 23.7652C20.3692 23.7067 20.3392 23.6774 20.2791 23.6189V23.5604C20.0691 23.2972 19.9169 23.0026 19.7969 22.708C19.7669 22.6202 19.7669 22.5032 19.8269 22.4134C19.8269 22.3841 19.8569 22.3841 19.8569 22.3841L19.7669 22.1501C21.3037 21.2391 22.4783 19.8309 23.0206 18.1573L23.2607 18.1866C23.2907 18.1866 23.2907 18.1573 23.2907 18.1573C23.3507 18.0988 23.4407 18.0696 23.5308 18.0696H23.5608C23.893 18.1281 24.2231 18.2158 24.5253 18.3328H24.5553C24.6153 18.3621 24.6753 18.3913 24.7354 18.3913C24.8554 18.4498 24.9454 18.5083 25.0676 18.5376C25.0976 18.5376 25.1276 18.5669 25.1876 18.5669C25.2176 18.5669 25.2176 18.5669 25.2477 18.5961C25.3077 18.6254 25.3377 18.6254 25.3977 18.6254C25.6678 18.6254 25.91 18.4498 26 18.2137C25.9743 17.8962 25.7321 17.6601 25.462 17.6016ZM16.7575 16.6906L15.9451 17.073L15.1327 16.6906L14.9227 15.8381L15.495 15.134H16.3995L16.9718 15.8381L16.7575 16.6906ZM21.6659 14.783C21.816 15.3994 21.846 16.0157 21.786 16.6321L18.9245 15.8402C18.6544 15.7817 18.5022 15.5164 18.5622 15.2531C18.5922 15.1654 18.6223 15.1069 18.6823 15.0484L20.9415 13.0509C21.2737 13.5795 21.5159 14.1667 21.6659 14.783ZM20.0391 11.9645L17.5698 13.6673C17.3598 13.7843 17.0575 13.7551 16.9075 13.5503C16.8475 13.4918 16.8175 13.4333 16.8175 13.3455L16.6374 10.3807C17.9621 10.527 19.1367 11.0848 20.0391 11.9645ZM14.5883 10.4664L15.1906 10.3494L15.0406 13.2849C15.0406 13.5482 14.8005 13.7551 14.5283 13.7551C14.4382 13.7551 14.3782 13.7258 14.2882 13.6965L11.7889 11.9645C12.5692 11.2311 13.5337 10.7025 14.5883 10.4664ZM10.9144 13.0509L13.1436 14.9878C13.3537 15.1633 13.3837 15.4579 13.2036 15.6626C13.1436 15.7504 13.0836 15.7796 12.9636 15.8089L10.042 16.63C9.94987 15.3994 10.25 14.1374 10.9144 13.0509ZM10.4021 18.0132L13.3837 17.5138C13.6237 17.5138 13.8659 17.6601 13.896 17.8962C13.926 17.9839 13.926 18.1009 13.8659 18.1908L12.7213 20.8923C11.6668 20.2154 10.8223 19.1874 10.4021 18.0132ZM17.2397 21.6528C16.8175 21.7406 16.3974 21.7991 15.9451 21.7991C15.3128 21.7991 14.6504 21.6821 14.0481 21.5045L15.525 18.8907C15.675 18.7152 15.9172 18.6567 16.1273 18.7737C16.2173 18.8322 16.2773 18.8907 16.3674 18.9785L17.8142 21.5337C17.6298 21.5651 17.4498 21.5943 17.2397 21.6528ZM20.9136 19.0996C20.4613 19.8038 19.829 20.4201 19.1067 20.861L17.9321 18.1009C17.8721 17.8669 17.9921 17.6308 18.2021 17.5431C18.2922 17.5138 18.3822 17.4846 18.4722 17.4846L21.4838 17.9839C21.3359 18.3934 21.1537 18.7758 20.9136 19.0996Z"
      fill="white"
    />
  </SvgComponent>
);
