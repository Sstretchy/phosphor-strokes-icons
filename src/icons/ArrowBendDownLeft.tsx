import { createIcon } from "../create-icon.js";

export const ArrowBendDownLeft = createIcon("arrow-bend-down-left", [
  [
    "path",
    {
      d: "M6.25 8.125L2.5 11.875L6.25 15.625",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M17.5 4.375C17.5 6.36413 16.7098 8.27175 15.3033 9.67831C13.8968 11.0848 11.9891 11.875 10 11.875H2.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default ArrowBendDownLeft;
