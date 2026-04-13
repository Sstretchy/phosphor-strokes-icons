import { createIcon } from "../create-icon.js";

export const ArrowLineRight = createIcon("arrow-line-right", [
  [
    "path",
    {
      d: "M4 16H23",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M14 7L23 16L14 25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M27 5V27",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default ArrowLineRight;
