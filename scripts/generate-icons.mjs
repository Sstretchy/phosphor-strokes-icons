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

    const pathMatches = [
      ...svg.matchAll(/<path\b([^>]*?)\s*\/?>/g),
    ];

    if (pathMatches.length === 0) {
      throw new Error(`No <path> elements found in ${file}`);
    }

    const nodes = pathMatches.map((match) => {
      const attrs = {};

      for (const [, rawName, rawValue] of match[1].matchAll(
        /([:\w-]+)="([^"]*)"/g,
      )) {
        const name = attrNameMap[rawName] ?? rawName;
        attrs[name] = rawValue;
      }

      delete attrs.xmlns;
      delete attrs.width;
      delete attrs.height;
      delete attrs.viewBox;
      delete attrs.strokeWidth;
      delete attrs.strokeLinecap;
      delete attrs.strokeLinejoin;

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

      return ["path", attrs];
    });

    const componentSource = `import { createIcon } from "../create-icon";

export const ${componentName} = createIcon(${JSON.stringify(iconName)}, ${stringifyNode(nodes)});
`;

    await fs.writeFile(
      path.join(targetDir, `${componentName}.tsx`),
      `${componentSource}
export default ${componentName};
`,
    );

    iconEntries.push([iconName, componentName]);
    exportLines.push(`export { ${componentName} } from "./${componentName}";`);
    dynamicImportLines.push(
      `  ${JSON.stringify(iconName)}: () => import("./icons/${componentName}"),`,
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
    `import { iconNameMap } from "./icon-name-map";
import type { StrokeIcon } from "./create-icon";

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
