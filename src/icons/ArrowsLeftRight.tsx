import { createIcon } from "../create-icon.js";

export const ArrowsLeftRight = createIcon("arrows-left-right", [
  [
    "path",
    {
      d: "M22 18L26 22L22 26",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M6 22H26",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10 14L6 10L10 6",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M26 10H6",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default ArrowsLeftRight;
