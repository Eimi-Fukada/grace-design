import React, { type FC } from 'react';
import type { ComponentProps } from '../../global/common-style';
export declare type AvatarProps = {
    src: string;
    circle?: boolean;
    onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
} & ComponentProps<'--size' | '--border-radius'>;
export declare const Avatar: FC<AvatarProps>;
