import { createIcon } from "../create-icon.js";

export const ArrowDownLeft = createIcon("arrow-down-left", [
  [
    "path",
    {
      d: "M24 8L8 24",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M21 24H8V11",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default ArrowDownLeft;
