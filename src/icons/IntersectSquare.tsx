import { createIcon } from "../create-icon.js";

export const IntersectSquare = createIcon("intersect-square", [
  [
    "path",
    {
      d: "M20 5H5V20H20V5Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M27 12H12V27H27V12Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M12 12L20 20",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default IntersectSquare;
