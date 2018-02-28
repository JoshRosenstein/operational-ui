/// <reference types="react" />
import * as React from "react";
import { IconName } from "./Icon";
export interface Props {
    id?: string | number;
    css?: any;
    className?: string;
    children: React.ReactNode;
    number?: number;
    label: string;
    fill: number;
    color?: string;
    barColor?: string;
    icon?: IconName;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}
declare const _default: (props: Props) => JSX.Element;
export default _default;