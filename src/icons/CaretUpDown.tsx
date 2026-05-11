import { createIcon } from "../create-icon.js";

export const CaretUpDown = createIcon("caret-up-down", [
  [
    "path",
    {
      d: "M6.25 13.75L10 17.5L13.75 13.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M6.25 6.25L10 2.5L13.75 6.25",
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

export default CaretUpDown;
