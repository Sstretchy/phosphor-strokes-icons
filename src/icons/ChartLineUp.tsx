import { createIcon } from "../create-icon.js";

export const ChartLineUp = createIcon("chart-line-up", [
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
      d: "M15.625 5.625L10 11.25L7.5 8.75L2.5 13.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M15.625 8.75V5.625H12.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default ChartLineUp;
