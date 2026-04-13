import { createIcon } from "../create-icon.js";

export const IntersectSquare = createIcon("intersect-square", [
  [
    "path",
    {
      d: "M12.5 3.125H3.125V12.5H12.5V3.125Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M16.875 7.5H7.5V16.875H16.875V7.5Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M7.5 7.5L12.5 12.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default IntersectSquare;
