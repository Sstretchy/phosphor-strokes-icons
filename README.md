# phosphor-strokes-icons

Phosphor stroke icon components for React, packaged with a Lucide-like import model:

- static icon imports for maximum tree-shaking
- optional by-name API
- optional dynamic loading API

## Install

```bash
npm i phosphor-strokes-icons
```

Peer dependency:

- `react` `^18 || ^19`

## Usage

### 1) Static imports (recommended)

```tsx
import { Gear, User } from "phosphor-strokes-icons";

export function Example() {
  return (
    <div>
      <Gear size={24} />
      <User size={20} strokeWidth={1.5} />
    </div>
  );
}
```

You can also import a single icon subpath:

```tsx
import { Gear } from "phosphor-strokes-icons/icons/Gear";
```

### 2) By-name API

```tsx
import { Icon } from "phosphor-strokes-icons/by-name";

export function Example() {
  return <Icon name="gear" size={24} />;
}
```

### 3) Dynamic loading

```tsx
import { loadIconByName } from "phosphor-strokes-icons/dynamic";

export async function getIcon() {
  const IconComponent = await loadIconByName("gear");
  return IconComponent;
}
```

## Props

Each icon component supports standard SVG props plus:

- `size?: string | number`
- `color?: string`
- `strokeWidth?: string | number`
- `absoluteStrokeWidth?: boolean`

Defaults:

- `size = 24`
- `color = "currentColor"`
- `strokeWidth = 1.5`
- `absoluteStrokeWidth = true`

`size` can be number (`px`) or CSS length string (`"1rem"`, `"24px"`).

Icon assets can contain local stroke-width differences. When `strokeWidth` changes,
those local widths scale proportionally from the source baseline, so details such as
dots stay visually heavier than the primary outline.

## Scripts

- `npm run import:raw -- <svg-directory>` — replace `src/raw-svg` from a directory
- `npm run generate` — generate icon components from `src/raw-svg`
- `npm run check` — TypeScript validation
- `npm run build` — generate + tsup build
- `npm run pack:dry` — inspect npm package before publish

## Publish Checklist

1. `npm run check`
2. `npm run build`
3. `npm run pack:dry`
4. `npm login`
5. `npm publish --access public`
