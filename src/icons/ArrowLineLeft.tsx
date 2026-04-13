import { createIcon } from "../create-icon.js";

export const ArrowLineLeft = createIcon("arrow-line-left", [
  [
    "path",
    {
      d: "M28 16H9",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M18 7L9 16L18 25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M5 5V27",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default ArrowLineLeft;
