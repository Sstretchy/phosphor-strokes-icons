import type { StrokeIcon } from "./create-icon";
import * as icons from "./icons";
import { iconNameMap } from "./icon-name-map";

type IconNameMap = typeof iconNameMap;

const entries = Object.entries(iconNameMap) as [
  keyof IconNameMap,
  keyof typeof icons,
][];

export const dictionary = Object.fromEntries(
  entries.map(([name, componentName]) => [name, icons[componentName]]),
) as Record<keyof IconNameMap, StrokeIcon>;
