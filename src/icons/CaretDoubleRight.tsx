import { createIcon } from "../create-icon.js";

export const CaretDoubleRight = createIcon("caret-double-right", [
  [
    "path",
    {
      d: "M4.375 3.75L10.625 10L4.375 16.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10.625 3.75L16.875 10L10.625 16.25",
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

export default CaretDoubleRight;
