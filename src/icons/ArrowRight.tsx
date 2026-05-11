import { createIcon } from "../create-icon.js";

export const ArrowRight = createIcon("arrow-right", [
  [
    "path",
    {
      d: "M3.125 10H16.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M11.25 4.375L16.875 10L11.25 15.625",
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

export default ArrowRight;
