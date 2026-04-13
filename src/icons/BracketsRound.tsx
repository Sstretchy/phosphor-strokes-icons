import { createIcon } from "../create-icon.js";

export const BracketsRound = createIcon("brackets-round", [
  [
    "path",
    {
      d: "M5.625 3.125C5.625 3.125 2.5 5 2.5 10C2.5 15 5.625 16.875 5.625 16.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M14.375 3.125C14.375 3.125 17.5 5 17.5 10C17.5 15 14.375 16.875 14.375 16.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default BracketsRound;
