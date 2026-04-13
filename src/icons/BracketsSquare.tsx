import { createIcon } from "../create-icon.js";

export const BracketsSquare = createIcon("brackets-square", [
  [
    "path",
    {
      d: "M10 5H5V27H10",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M22 5H27V27H22",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default BracketsSquare;
