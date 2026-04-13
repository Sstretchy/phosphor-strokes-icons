import { createIcon } from "../create-icon.js";

export const CaretDoubleLeft = createIcon("caret-double-left", [
  [
    "path",
    {
      d: "M15.625 16.25L9.375 10L15.625 3.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M9.375 16.25L3.125 10L9.375 3.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default CaretDoubleLeft;
