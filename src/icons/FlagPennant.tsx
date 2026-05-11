import { createIcon } from "../create-icon.js";

export const FlagPennant = createIcon("flag-pennant", [
  [
    "path",
    {
      d: "M4.375 13.125L18.75 8.125L4.375 3.125V16.875",
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

export default FlagPennant;
