import { createIcon } from "../create-icon.js";

export const ArrowUpLeft = createIcon("arrow-up-left", [
  [
    "path",
    {
      d: "M15 15L5 5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M13.125 5H5V13.125",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default ArrowUpLeft;
