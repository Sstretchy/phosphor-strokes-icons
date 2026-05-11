import { createIcon } from "../create-icon.js";

export const ChartLineDown = createIcon("chart-line-down", [
  [
    "path",
    {
      d: "M15.625 13.125L10 7.5L7.5 10L2.5 5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M15.625 10V13.125H12.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M17.5 16.25H2.5V3.75",
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

export default ChartLineDown;
