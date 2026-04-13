import { createIcon } from "../create-icon.js";

export const ArrowUpLeft = createIcon("arrow-up-left", [
  [
    "path",
    {
      d: "M24 24L8 8",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M21 8H8V21",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default ArrowUpLeft;
