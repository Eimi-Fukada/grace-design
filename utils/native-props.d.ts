import type { ReactElement } from 'react';
import React from 'react';
import type { ComponentProps } from '../global/common-style';
export declare function withNativeProps<T extends ComponentProps>(props: T, element: ReactElement): ReactElement<any, string | React.JSXElementConstructor<any>>;
