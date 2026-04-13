import { createIcon } from "../create-icon.js";

export const ArrowsHorizontal = createIcon("arrows-horizontal", [
  [
    "path",
    {
      d: "M7 12L3 16L7 20",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M25 12L29 16L25 20",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M3 16H29",
      stroke: "currentColor"
    }
  ]
]);

export default ArrowsHorizontal;
