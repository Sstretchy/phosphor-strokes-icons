import { createIcon } from "../create-icon.js";

export const ArrowLineUpRight = createIcon("arrow-line-up-right", [
  [
    "path",
    {
      d: "M3.125 16.875H16.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M6.25 13.125L15 4.375",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M7.5 4.375H15V11.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default ArrowLineUpRight;
