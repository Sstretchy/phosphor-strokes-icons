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
  attrs: Record<string, string | number>,
][];

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ElementAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;

export interface StrokeIconProps extends ElementAttributes {
  size?: string | number;
  color?: string;
  strokeWidth?: string | number;
  absoluteStrokeWidth?: boolean;
}

type IconOptions = {
  viewBox?: string;
  absoluteStrokeBase?: number;
  strokeWidthBase?: number;
  defaultStrokeWidth?: string | number;
};

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
  absoluteStrokeBase: number,
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

  return (parsedStrokeWidth.value * absoluteStrokeBase) / parsedSize.value;
}

function formatNumber(value: number) {
  return Number(value.toFixed(6));
}

function scaleLength(value: string | number, multiplier: number) {
  if (multiplier === 1) {
    return value;
  }

  const parsedValue = parseLength(value);

  if (!parsedValue) {
    return `calc(${String(value)} * ${formatNumber(multiplier)})`;
  }

  const scaledValue = formatNumber(parsedValue.value * multiplier);

  return parsedValue.unit === "" ? scaledValue : `${scaledValue}${parsedValue.unit}`;
}

function resolveRelativeStrokeWidth(
  resolvedStrokeWidth: string | number,
  sourceStrokeWidth: string | number,
  strokeWidthBase: number,
) {
  const parsedSourceStrokeWidth = parseLength(sourceStrokeWidth);

  if (!parsedSourceStrokeWidth || !Number.isFinite(strokeWidthBase) || strokeWidthBase === 0) {
    return sourceStrokeWidth;
  }

  return scaleLength(
    resolvedStrokeWidth,
    parsedSourceStrokeWidth.value / strokeWidthBase,
  );
}

function resolveNodeAttrs(
  attrs: Record<string, string | number>,
  resolvedStrokeWidth: string | number,
  strokeWidthBase: number | undefined,
) {
  if (strokeWidthBase === undefined || attrs.strokeWidth === undefined) {
    return attrs;
  }

  return {
    ...attrs,
    strokeWidth: resolveRelativeStrokeWidth(
      resolvedStrokeWidth,
      attrs.strokeWidth,
      strokeWidthBase,
    ),
  };
}

const IconBase = forwardRef<
  SVGSVGElement,
  StrokeIconProps & {
    iconNode: IconNode;
    viewBox: string;
    absoluteStrokeBase: number;
    strokeWidthBase?: number;
    defaultStrokeWidth?: string | number;
  }
>(
  (
    {
      color = "currentColor",
      size = 24,
      strokeWidth: strokeWidthProp,
      absoluteStrokeWidth = true,
      className,
      children,
      iconNode,
      viewBox,
      absoluteStrokeBase,
      strokeWidthBase,
      defaultStrokeWidth,
      ...props
    },
    ref,
  ) => {
    const strokeWidth = strokeWidthProp ?? defaultStrokeWidth ?? 1.5;
    const resolvedStrokeWidth = resolveStrokeWidth(
      strokeWidth,
      size,
      absoluteStrokeWidth,
      absoluteStrokeBase,
    );

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={viewBox}
        className={joinClassNames("br-icon", className)}
        {...props}
        fill="none"
        stroke={color}
        strokeWidth={resolvedStrokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {iconNode.map(([elementName, attrs], index) =>
          createElement(elementName, {
            key: `${elementName}-${attrs.d ?? attrs.cx ?? attrs.points ?? index}`,
            ...resolveNodeAttrs(attrs, resolvedStrokeWidth, strokeWidthBase),
          }),
        )}
        {children}
      </svg>
    );
  },
);

IconBase.displayName = "IconBase";

export function createIcon(
  iconName: string,
  iconNode: IconNode,
  options: IconOptions = {},
): StrokeIcon {
  const viewBox = options.viewBox ?? "0 0 32 32";
  const absoluteStrokeBase = options.absoluteStrokeBase ?? 32;
  const strokeWidthBase = options.strokeWidthBase;
  const defaultStrokeWidth = options.defaultStrokeWidth ?? strokeWidthBase;

  const Component = forwardRef<SVGSVGElement, StrokeIconProps>(
    ({ className, ...props }, ref) => (
      <IconBase
        ref={ref}
        iconNode={iconNode}
        viewBox={viewBox}
        absoluteStrokeBase={absoluteStrokeBase}
        strokeWidthBase={strokeWidthBase}
        defaultStrokeWidth={defaultStrokeWidth}
        className={joinClassNames(`br-icon-${iconName}`, className)}
        {...props}
      />
    ),
  );

  Component.displayName = iconName;

  return Component;
}

export type { IconNode };
