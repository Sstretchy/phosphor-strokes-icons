import { createIcon } from "../create-icon.js";

export const ArrowDown = createIcon("arrow-down", [
  [
    "path",
    {
      d: "M10 3.125V16.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M4.375 11.25L10 16.875L15.625 11.25",
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

export default ArrowDown;
