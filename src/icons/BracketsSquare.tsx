import { createIcon } from "../create-icon.js";

export const BracketsSquare = createIcon("brackets-square", [
  [
    "path",
    {
      d: "M6.25 3.125H3.125V16.875H6.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M13.75 3.125H16.875V16.875H13.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20,
  strokeWidthBase: 1.6
});

export default BracketsSquare;
