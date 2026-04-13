import { createIcon } from "../create-icon.js";

export const CellSignalLow = createIcon("cell-signal-low", [
  [
    "path",
    {
      d: "M6.25 11.875V15.625",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M3.125 15V15.625",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default CellSignalLow;
