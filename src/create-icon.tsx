import { createElement, forwardRef } from "react";
import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

type SVGElementType =
  | "path"
  | "circle"
  | "ellipse"
  | "rect"
  | "line"
  | "polyline"
  | "polygon";
type IconNode = readonly [
  elementName: SVGElementType,
  attrs: Record<string, string>,
][];

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ElementAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;

export interface StrokeIconProps extends ElementAttributes {
  size?: string | number;
  color?: string;
  strokeWidth?: string | number;
  absoluteStrokeWidth?: boolean;
}

export type StrokeIcon = ForwardRefExoticComponent<
  Omit<StrokeIconProps, "ref"> & RefAttributes<SVGSVGElement>
>;

function joinClassNames(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type ParsedLength = {
  value: number;
  unit: string;
};

function parseLength(value: string | number): ParsedLength | null {
  if (typeof value === "number") {
    if (!Number.isFinite(value)) {
      return null;
    }
    return { value, unit: "" };
  }

  const trimmed = value.trim();
  const match = trimmed.match(/^(-?\d*\.?\d+)([a-z%]*)$/i);

  if (!match) {
    return null;
  }

  const numericValue = Number(match[1]);

  if (!Number.isFinite(numericValue)) {
    return null;
  }

  return {
    value: numericValue,
    unit: (match[2] ?? "").toLowerCase(),
  };
}

function resolveStrokeWidth(
  strokeWidth: string | number,
  size: string | number,
  absoluteStrokeWidth: boolean,
) {
  if (!absoluteStrokeWidth) {
    return strokeWidth;
  }

  const parsedSize = parseLength(size);
  const parsedStrokeWidth = parseLength(strokeWidth);

  if (!parsedSize || parsedSize.value === 0 || !parsedStrokeWidth) {
    return strokeWidth;
  }

  const hasExplicitSizeUnit = parsedSize.unit !== "" && parsedSize.unit !== "px";
  const hasExplicitStrokeUnit = parsedStrokeWidth.unit !== "" && parsedStrokeWidth.unit !== "px";

  if (hasExplicitSizeUnit && !hasExplicitStrokeUnit) {
    // We can't safely convert unitless stroke widths against non-px sizes like rem/em.
    return strokeWidth;
  }

  if (
    parsedSize.unit !== "" &&
    parsedStrokeWidth.unit !== "" &&
    parsedSize.unit !== parsedStrokeWidth.unit
  ) {
    return strokeWidth;
  }

  return (parsedStrokeWidth.value * 32) / parsedSize.value;
}

const IconBase = forwardRef<
  SVGSVGElement,
  StrokeIconProps & {
    iconNode: IconNode;
  }
>(
  (
    {
      color = "currentColor",
      size = 24,
      strokeWidth = 1.5,
      absoluteStrokeWidth = true,
      className,
      children,
      iconNode,
      ...props
    },
    ref,
  ) => {
    const resolvedStrokeWidth = resolveStrokeWidth(
      strokeWidth,
      size,
      absoluteStrokeWidth,
    );

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        stroke={color}
        strokeWidth={resolvedStrokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={joinClassNames("br-icon", className)}
        {...props}
      >
        {iconNode.map(([elementName, attrs], index) =>
          createElement(elementName, {
            key: `${elementName}-${attrs.d ?? attrs.cx ?? attrs.points ?? index}`,
            ...attrs,
          }),
        )}
        {children}
      </svg>
    );
  },
);

IconBase.displayName = "IconBase";

export function createIcon(iconName: string, iconNode: IconNode): StrokeIcon {
  const Component = forwardRef<SVGSVGElement, StrokeIconProps>(
    ({ className, ...props }, ref) => (
      <IconBase
        ref={ref}
        iconNode={iconNode}
        className={joinClassNames(`br-icon-${iconName}`, className)}
        {...props}
      />
    ),
  );

  Component.displayName = iconName;

  return Component;
}

export type { IconNode };
