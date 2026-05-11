import { createIcon } from "../create-icon.js";

export const CaretLineDown = createIcon("caret-line-down", [
  [
    "path",
    {
      d: "M16.25 5.625L10 11.875L3.75 5.625",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M3.75 15H16.25",
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

export default CaretLineDown;
