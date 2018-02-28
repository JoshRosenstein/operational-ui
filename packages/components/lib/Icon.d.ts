/// <reference types="react" />
import * as React from "react";
import { Theme } from "@operational/theme";
import * as BrandIcons from "./Icon/BrandIcon";
import { ReactFeatherIconName } from "./Icon/ReactFeatherIcon";
export declare type IconName = ReactFeatherIconName | BrandIcons.BrandIconName;
export interface Props {
    id?: string | number;
    name: IconName;
    size?: number;
    color?: string;
    rotation?: number;
}
export interface PropsWithTheme extends Props {
    theme: Theme;
}
declare const WrappedIcon: React.SFC<Props>;
export default WrappedIcon;