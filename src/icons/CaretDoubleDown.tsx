import { createIcon } from "../create-icon.js";

export const CaretDoubleDown = createIcon("caret-double-down", [
  [
    "path",
    {
      d: "M16.25 10.625L10 16.875L3.75 10.625",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M16.25 4.375L10 10.625L3.75 4.375",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default CaretDoubleDown;
