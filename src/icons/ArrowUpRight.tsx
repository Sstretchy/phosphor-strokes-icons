import { createIcon } from "../create-icon.js";

export const ArrowUpRight = createIcon("arrow-up-right", [
  [
    "path",
    {
      d: "M8 24L24 8",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M11 8H24V21",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default ArrowUpRight;
