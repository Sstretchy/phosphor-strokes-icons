import { createIcon } from "../create-icon.js";

export const ArrowDownRight = createIcon("arrow-down-right", [
  [
    "path",
    {
      d: "M8 8L24 24",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M11 24H24V11",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default ArrowDownRight;
