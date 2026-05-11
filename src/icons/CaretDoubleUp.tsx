import { createIcon } from "../create-icon.js";

export const CaretDoubleUp = createIcon("caret-double-up", [
  [
    "path",
    {
      d: "M3.75 15.625L10 9.375L16.25 15.625",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M3.75 9.375L10 3.125L16.25 9.375",
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

export default CaretDoubleUp;
