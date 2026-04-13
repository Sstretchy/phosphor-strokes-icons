import { createIcon } from "../create-icon.js";

export const CaretLineRight = createIcon("caret-line-right", [
  [
    "path",
    {
      d: "M8 6L18 16L8 26",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M23 6V26",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default CaretLineRight;
