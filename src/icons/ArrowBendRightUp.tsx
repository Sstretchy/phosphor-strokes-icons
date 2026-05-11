import { createIcon } from "../create-icon.js";

export const ArrowBendRightUp = createIcon("arrow-bend-right-up", [
  [
    "path",
    {
      d: "M8.125 6.25L11.875 2.5L15.625 6.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M4.375 17.5C6.36413 17.5 8.27175 16.7098 9.67831 15.3033C11.0848 13.8968 11.875 11.9891 11.875 10V2.5",
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

export default ArrowBendRightUp;
