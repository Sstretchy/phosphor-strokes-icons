import { createIcon } from "../create-icon.js";

export const ArrowUpRight = createIcon("arrow-up-right", [
  [
    "path",
    {
      d: "M5 15L15 5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M6.875 5H15V13.125",
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

export default ArrowUpRight;
