import type { FC, SVGProps } from 'react';
declare type SVGElementProps = SVGProps<SVGSVGElement>;
declare type IconSizeShort = 'S' | 'M' | 'L' | 'XL';
declare type IconSizeLong = 'small' | 'medium' | 'large' | 'extraLarge';
declare type IconSize = IconSizeShort | IconSizeLong | 'responsive';
declare type SizeAffectStyleProps = 'width' | 'height' | 'viewBox';
interface CustomizedSvgProps {
    /**
     * @default: 'responsive'
     *
     * S_small: 16
     *
     * M_medium: 20
     *
     * L_large: 24
     *
     * XL_extraLarge: 32
     *
     * responsive: '1em'
     */
    size?: IconSize;
    /**
     * @default: {}
     */
    style?: Omit<SVGProps<SVGSVGElement>['style'], SizeAffectStyleProps>;
}
declare type FilteredSvgElementProps = Omit<SVGElementProps, SizeAffectStyleProps | keyof CustomizedSvgProps>;
export interface CustomizedSVGComponentProps extends CustomizedSvgProps, FilteredSvgElementProps {
}
export declare type CustomizedSVGComponent = FC<CustomizedSVGComponentProps>;
export interface CommonSVGComponentProps extends CustomizedSVGComponentProps {
    viewBox: SVGProps<SVGSVGElement>['viewBox'];
}
export declare type CommonSVGComponent = FC<CommonSVGComponentProps>;
export declare type NotUndefined<T> = T extends undefined ? never : T;
export {};