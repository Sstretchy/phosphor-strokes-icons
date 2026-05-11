import { createIcon } from "../create-icon.js";

export const ArrowUp = createIcon("arrow-up", [
  [
    "path",
    {
      d: "M10 16.875V3.125",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M4.375 8.75L10 3.125L15.625 8.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20,
  strokeWidthBase: 1.6
});

export default ArrowUp;
