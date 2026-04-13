import { createIcon } from "../create-icon.js";

export const CaretLineUp = createIcon("caret-line-up", [
  [
    "path",
    {
      d: "M6 24L16 14L26 24",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M6 9H26",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default CaretLineUp;
