import type { StrokeIcon } from "./create-icon.js";
import * as icons from "./icons/index.js";
import { iconNameMap } from "./icon-name-map.js";

type IconNameMap = typeof iconNameMap;

const entries = Object.entries(iconNameMap) as [
  keyof IconNameMap,
  keyof typeof icons,
][];

export const dictionary = Object.fromEntries(
  entries.map(([name, componentName]) => [name, icons[componentName]]),
) as Record<keyof IconNameMap, StrokeIcon>;
