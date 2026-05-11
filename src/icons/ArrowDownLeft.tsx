import { createIcon } from "../create-icon.js";

export const ArrowDownLeft = createIcon("arrow-down-left", [
  [
    "path",
    {
      d: "M15 5L5 15",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M13.125 15H5V6.875",
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

export default ArrowDownLeft;
