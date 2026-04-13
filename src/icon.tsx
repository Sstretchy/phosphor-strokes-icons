import type { DetailedHTMLProps, HTMLAttributes, SVGProps } from "react";
import { dictionary } from "./icon-dictionary";
import { iconSizes } from "./types";
import type { IconName, IconSize, StrokeWidth } from "./types";

function joinClassNames(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export interface IconProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: IconName;
  classes?: {
    wrapper?: string;
    icon?: string;
  };
  size?: IconSize | number;
  strokeWidth?: StrokeWidth;
  color?: string;
  absoluteStrokeWidth?: boolean;
  svgProps?: Omit<SVGProps<SVGSVGElement>, "color" | "size" | "strokeWidth" | "className">;
}

export function Icon({
  name,
  size = "medium",
  strokeWidth = 1.5,
  classes,
  color,
  absoluteStrokeWidth,
  svgProps,
  className,
  ...rest
}: IconProps) {
  const IconComponent = dictionary[name];
  const resolvedSize = typeof size === "number" ? size : iconSizes[size];

  return (
    <div
      {...rest}
      className={joinClassNames(classes?.wrapper)}
    >
      <IconComponent
        {...svgProps}
        color={color}
        size={resolvedSize}
        strokeWidth={strokeWidth}
        absoluteStrokeWidth={absoluteStrokeWidth}
        className={joinClassNames(className, classes?.icon)}
      />
    </div>
  );
}
