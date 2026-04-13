import { createIcon } from "../create-icon.js";

export const CaretLineLeft = createIcon("caret-line-left", [
  [
    "path",
    {
      d: "M15 16.25L8.75 10L15 3.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M5.625 3.75V16.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default CaretLineLeft;
