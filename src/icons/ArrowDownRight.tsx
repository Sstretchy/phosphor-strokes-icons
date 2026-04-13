import { createIcon } from "../create-icon.js";

export const ArrowDownRight = createIcon("arrow-down-right", [
  [
    "path",
    {
      d: "M5 5L15 15",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M6.875 15H15V6.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default ArrowDownRight;
