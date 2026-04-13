import { createIcon } from "../create-icon.js";

export const ChartLine = createIcon("chart-line", [
  [
    "path",
    {
      d: "M17.5 16.25H2.5V3.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M17.5 7.5L12.5 11.875L7.5 8.125L2.5 12.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default ChartLine;
