import { createIcon } from "../create-icon.js";

export const TrendUp = createIcon("trend-up", [
  [
    "path",
    {
      d: "M18.125 4.375L10.625 11.875L7.5 8.75L1.875 14.375",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M18.125 9.375V4.375H13.125",
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

export default TrendUp;
