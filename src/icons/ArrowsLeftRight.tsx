import { createIcon } from "../create-icon";

export const ArrowsLeftRight = createIcon("arrows-left-right", [
  [
    "path",
    {
      d: "M22 18L26 22L22 26",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M6 22H26",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M10 14L6 10L10 6",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M26 10H6",
      stroke: "currentColor"
    }
  ]
]);

export default ArrowsLeftRight;
