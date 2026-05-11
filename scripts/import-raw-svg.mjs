import { promises as fs } from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd());
const targetDir = path.join(root, "src/raw-svg");
const sourceDirArg = process.argv[2];

if (!sourceDirArg) {
  console.error("Usage: node scripts/import-raw-svg.mjs <source-svg-directory>");
  process.exit(1);
}

const sourceDir = path.resolve(sourceDirArg);

async function assertDirectory(directory, label) {
  let stats;

  try {
    stats = await fs.stat(directory);
  } catch {
    throw new Error(`${label} does not exist: ${directory}`);
  }

  if (!stats.isDirectory()) {
    throw new Error(`${label} is not a directory: ${directory}`);
  }
}

async function importRawSvg() {
  await assertDirectory(sourceDir, "Source directory");

  const sourceFiles = (await fs.readdir(sourceDir))
    .filter((file) => file.endsWith(".svg"))
    .sort((a, b) => a.localeCompare(b));

  if (sourceFiles.length === 0) {
    throw new Error(`No SVG files found in source directory: ${sourceDir}`);
  }

  await fs.rm(targetDir, { recursive: true, force: true });
  await fs.mkdir(targetDir, { recursive: true });

  await Promise.all(
    sourceFiles.map((file) =>
      fs.copyFile(path.join(sourceDir, file), path.join(targetDir, file)),
    ),
  );

  console.log(`Imported ${sourceFiles.length} raw SVG icons from ${sourceDir}`);
}

importRawSvg().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
