import { defineConfig } from "tsup";
import { readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const iconsDir = path.join(root, "src/icons");
const iconEntries = Object.fromEntries(
  readdirSync(iconsDir)
    .filter((file) => file.endsWith(".tsx") && file !== "index.ts")
    .sort((a, b) => a.localeCompare(b))
    .map((file) => [
      `icons/${path.basename(file, ".tsx")}`,
      `src/icons/${file}`,
    ]),
);

export default defineConfig({
  entry: {
    index: "src/index.ts",
    icon: "src/icon.tsx",
    "by-name": "src/by-name.ts",
    dynamic: "src/dynamic.ts",
    "create-icon": "src/create-icon.tsx",
    "icon-dictionary": "src/icon-dictionary.ts",
    "icon-name-map": "src/icon-name-map.ts",
    "icons/index": "src/icons/index.ts",
    types: "src/types.ts",
    ...iconEntries,
  },
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: false,
  clean: true,
  bundle: false,
  splitting: false,
  target: "es2022",
  external: ["react"],
});
