import { createIcon } from "../create-icon.js";

export const TrendDown = createIcon("trend-down", [
  [
    "path",
    {
      d: "M18.125 15L10.625 7.5L7.5 10.625L1.875 5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M18.125 10V15H13.125",
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

export default TrendDown;
