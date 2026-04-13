import { createIcon } from "../create-icon.js";

export const BracketsAngle = createIcon("brackets-angle", [
  [
    "path",
    {
      d: "M6.25 3.125L1.875 10L6.25 16.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M13.75 3.125L18.125 10L13.75 16.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default BracketsAngle;
