import { createIcon } from "../create-icon.js";

export const CaretLineLeft = createIcon("caret-line-left", [
  [
    "path",
    {
      d: "M24 26L14 16L24 6",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M9 6V26",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default CaretLineLeft;
