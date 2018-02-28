/// <reference types="react" />
import * as React from "react";
export interface Props {
    id?: string | number;
    css?: {};
    className?: string;
    children?: React.ReactNode;
    color?: string;
    expanded?: boolean;
    expandOnHover?: boolean;
    expandedWidth?: number;
    width?: number;
}
export interface State {
    isHovered: boolean;
}
export default class Sidenav extends React.Component<Props, State> {
    state: {
        isHovered: boolean;
    };
    render(): JSX.Element;
}