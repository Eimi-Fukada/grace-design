import React, { type FC } from 'react';
import type { ComponentProps } from '../../global/common-style';
export declare type SpaceProps = {
    /**
     * 间距方向
     */
    direction?: 'horizontal' | 'vertical';
    /**
     * 交叉轴对齐方式
     */
    align?: 'start' | 'end' | 'center' | 'baseline';
    /**
     * 主轴对齐方式
     */
    justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
    /**
     * 是否自动换行，仅在 `horizontal` 时有效
     */
    wrap?: boolean;
    /**
     * 是否渲染为块级元素
     */
    block?: boolean;
    /**
     *
     * @param event 点击事件
     * @returns
     */
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    /**
     * children
     */
    children?: React.ReactNode;
} & ComponentProps<'--gap' | '--gap-vertical' | '--gap-horizontal'>;
export declare const Space: FC<SpaceProps>;
