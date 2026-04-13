import type { StrokeIconProps } from "./create-icon";
import type { iconNameMap } from "./icon-name-map";

export const iconSizes = {
  "xx-small": 13,
  "x-small": 15,
  small: 19,
  medium: 23,
  large: 27,
  "x-large": 31,
  "xx-large": 35,
} as const;

export type IconName = keyof typeof iconNameMap;
export type IconSize = keyof typeof iconSizes;
export type StrokeWidth = StrokeIconProps["strokeWidth"];
