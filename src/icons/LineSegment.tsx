import { createIcon } from "../create-icon.js";

export const LineSegment = createIcon("line-segment", [
  [
    "path",
    {
      d: "M5 16.875C6.03553 16.875 6.875 16.0356 6.875 15C6.875 13.9644 6.03553 13.125 5 13.125C3.96447 13.125 3.125 13.9644 3.125 15C3.125 16.0356 3.96447 16.875 5 16.875Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M15 6.875C16.0356 6.875 16.875 6.03553 16.875 5C16.875 3.96447 16.0356 3.125 15 3.125C13.9644 3.125 13.125 3.96447 13.125 5C13.125 6.03553 13.9644 6.875 15 6.875Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M13.6741 6.32568L6.32568 13.6741",
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

export default LineSegment;
