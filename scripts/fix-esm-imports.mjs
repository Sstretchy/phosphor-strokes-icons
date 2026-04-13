import { existsSync } from "node:fs";
import { promises as fs } from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd());
const distDir = path.join(root, "dist");

const relativeSpecifierRE = /^\.{1,2}\//;
const hasKnownExtRE = /\.(js|mjs|cjs|json|node)$/i;

async function collectJsFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectJsFiles(fullPath)));
      continue;
    }
    if (entry.isFile() && fullPath.endsWith(".js")) {
      files.push(fullPath);
    }
  }

  return files;
}

function resolvePatchedSpecifier(specifier, filePath) {
  if (!relativeSpecifierRE.test(specifier) || hasKnownExtRE.test(specifier)) {
    return specifier;
  }

  const fileDir = path.dirname(filePath);
  const asFile = path.resolve(fileDir, `${specifier}.js`);
  if (existsSync(asFile)) {
    return `${specifier}.js`;
  }

  const asIndex = path.resolve(fileDir, specifier, "index.js");
  if (existsSync(asIndex)) {
    return `${specifier}/index.js`;
  }

  return specifier;
}

function patchSource(code, filePath) {
  const fromRe = /(from\s*["'])([^"']+)(["'])/g;
  const importRe = /(import\(\s*["'])([^"']+)(["']\s*\))/g;

  const withFromPatched = code.replace(fromRe, (full, before, specifier, after) => {
    const next = resolvePatchedSpecifier(specifier, filePath);
    return `${before}${next}${after}`;
  });

  return withFromPatched.replace(importRe, (full, before, specifier, after) => {
    const next = resolvePatchedSpecifier(specifier, filePath);
    return `${before}${next}${after}`;
  });
}

async function run() {
  if (!existsSync(distDir)) {
    console.error(`dist directory not found: ${distDir}`);
    process.exitCode = 1;
    return;
  }

  const jsFiles = await collectJsFiles(distDir);
  let changed = 0;

  for (const filePath of jsFiles) {
    const before = await fs.readFile(filePath, "utf8");
    const after = patchSource(before, filePath);

    if (before !== after) {
      await fs.writeFile(filePath, after);
      changed += 1;
    }
  }

  console.log(`Patched ESM imports in ${changed} file(s)`);
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
