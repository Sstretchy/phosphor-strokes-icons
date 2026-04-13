import { promises as fs } from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd());
const sourceDir = path.join(root, "src/raw-svg");
const targetDir = path.join(root, "src/icons");
const mapFile = path.join(root, "src/icon-name-map.ts");
const barrelFile = path.join(targetDir, "index.ts");
const dynamicFile = path.join(root, "src/dynamic.ts");

const attrNameMap = {
  "clip-rule": "clipRule",
  "fill-rule": "fillRule",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-width": "strokeWidth",
};
const supportedElements = [
  "path",
  "circle",
  "ellipse",
  "rect",
  "line",
  "polyline",
  "polygon",
];

function parseAttributes(rawAttrs) {
  const attrs = {};

  for (const [, rawName, rawValue] of rawAttrs.matchAll(/([:\w-]+)="([^"]*)"/g)) {
    const name = attrNameMap[rawName] ?? rawName;
    attrs[name] = rawValue;
  }

  return attrs;
}

function normalizePaint(attrs) {
  delete attrs.xmlns;
  delete attrs.viewBox;
  delete attrs.strokeWidth;

  if (attrs.fill && attrs.fill !== "none") {
    attrs.fill = "currentColor";
  } else {
    delete attrs.fill;
  }

  if (attrs.stroke && attrs.stroke !== "none") {
    attrs.stroke = "currentColor";
  } else if (!attrs.stroke && attrs.fill === "currentColor") {
    attrs.stroke = "none";
  } else {
    delete attrs.stroke;
  }
}

function isCanvasBackgroundRect(elementName, attrs) {
  if (elementName !== "rect") {
    return false;
  }

  const width = Number(attrs.width);
  const height = Number(attrs.height);
  const x = Number(attrs.x ?? "0");
  const y = Number(attrs.y ?? "0");
  const fill = (attrs.fill ?? "").toLowerCase();

  const isWhiteFill = fill === "white" || fill === "#fff" || fill === "#ffffff";

  return width === 32 && height === 32 && x === 0 && y === 0 && isWhiteFill;
}

function toKebabCase(value) {
  return value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

function stringifyNode(node) {
  return JSON.stringify(node, null, 2)
    .replace(/"([^"]+)":/g, "$1:")
    .replace(/"/g, '"');
}

function parseRootViewBox(svg) {
  const svgOpenTagMatch = svg.match(/<svg\b([^>]*)>/i);
  if (!svgOpenTagMatch) {
    return { viewBox: "0 0 32 32", absoluteStrokeBase: 32 };
  }

  const attrs = parseAttributes(svgOpenTagMatch[1]);
  const rawViewBox = attrs.viewBox;

  if (typeof rawViewBox === "string") {
    const parts = rawViewBox
      .trim()
      .split(/\s+/)
      .map((part) => Number(part));

    if (parts.length === 4 && parts.every((part) => Number.isFinite(part))) {
      const width = parts[2];
      const height = parts[3];
      const base = Number.isFinite(width) && Number.isFinite(height)
        ? Math.max(width, height)
        : 32;

      return {
        viewBox: `${parts[0]} ${parts[1]} ${parts[2]} ${parts[3]}`,
        absoluteStrokeBase: base > 0 ? base : 32,
      };
    }
  }

  const width = Number(attrs.width);
  const height = Number(attrs.height);
  const fallbackBase = Number.isFinite(width) && Number.isFinite(height)
    ? Math.max(width, height)
    : 32;

  return {
    viewBox: `0 0 ${fallbackBase} ${fallbackBase}`,
    absoluteStrokeBase: fallbackBase > 0 ? fallbackBase : 32,
  };
}

async function generate() {
  const files = (await fs.readdir(sourceDir))
    .filter((file) => file.endsWith(".svg"))
    .sort((a, b) => a.localeCompare(b));

  await fs.rm(targetDir, { recursive: true, force: true });
  await fs.mkdir(targetDir, { recursive: true });

  const iconEntries = [];
  const exportLines = [];
  const dynamicImportLines = [];

  for (const file of files) {
    const componentName = path.basename(file, ".svg");
    const iconName = toKebabCase(componentName);
    const filePath = path.join(sourceDir, file);
    const svg = await fs.readFile(filePath, "utf8");
    const { viewBox, absoluteStrokeBase } = parseRootViewBox(svg);

    const nodeMatches = [
      ...svg.matchAll(
        /<(path|circle|ellipse|rect|line|polyline|polygon)\b([^>]*?)\s*\/?>/g,
      ),
    ];

    const nodes = nodeMatches
      .map((match) => {
        const elementName = match[1];
        const attrs = parseAttributes(match[2]);

        if (isCanvasBackgroundRect(elementName, attrs)) {
          return null;
        }

        normalizePaint(attrs);
        return [elementName, attrs];
      })
      .filter(Boolean);

    if (nodes.length === 0) {
      throw new Error(
        `No supported vector elements (${supportedElements.join(", ")}) found in ${file}`,
      );
    }

    const componentSource = `import { createIcon } from "../create-icon.js";

export const ${componentName} = createIcon(${JSON.stringify(iconName)}, ${stringifyNode(nodes)}, {
  viewBox: ${JSON.stringify(viewBox)},
  absoluteStrokeBase: ${absoluteStrokeBase}
});
`;

    await fs.writeFile(
      path.join(targetDir, `${componentName}.tsx`),
      `${componentSource}
export default ${componentName};
`,
    );

    iconEntries.push([iconName, componentName]);
    exportLines.push(`export { ${componentName} } from "./${componentName}.js";`);
    dynamicImportLines.push(
      `  ${JSON.stringify(iconName)}: () => import("./icons/${componentName}.js"),`,
    );
  }

  const mapSource = `export const iconNameMap = {
${iconEntries
  .map(([iconName, componentName]) => `  ${JSON.stringify(iconName)}: ${JSON.stringify(componentName)},`)
  .join("\n")}
} as const;
`;

  await fs.writeFile(mapFile, mapSource);
  await fs.writeFile(barrelFile, `${exportLines.join("\n")}\n`);
  await fs.writeFile(
    dynamicFile,
    `import { iconNameMap } from "./icon-name-map.js";
import type { StrokeIcon } from "./create-icon.js";

type DynamicIconModule = Record<string, StrokeIcon> & {
  default?: StrokeIcon;
};
type DynamicIconImporter = () => Promise<DynamicIconModule>;

export const dynamicIconImports: Record<string, DynamicIconImporter> = {
${dynamicImportLines.join("\n")}
};

export type DynamicIconName = keyof typeof iconNameMap;

export async function loadIconByName(name: DynamicIconName): Promise<StrokeIcon> {
  const module = await dynamicIconImports[name]();
  const exportName = iconNameMap[name];
  const icon = module[exportName] ?? module.default;

  if (!icon) {
    throw new Error(\`Failed to load icon: \${name}\`);
  }

  return icon;
}
`,
  );

  console.log(`Generated ${files.length} icons`);
}

generate().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
