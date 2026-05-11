import { createIcon } from "../create-icon.js";

export const CaretLineRight = createIcon("caret-line-right", [
  [
    "path",
    {
      d: "M5 3.75L11.25 10L5 16.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M14.375 3.75V16.25",
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

export default CaretLineRight;
