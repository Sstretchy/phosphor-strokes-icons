import { createIcon } from "../create-icon.js";

export const CaretLineDown = createIcon("caret-line-down", [
  [
    "path",
    {
      d: "M26 9L16 19L6 9",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M6 24H26",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default CaretLineDown;
