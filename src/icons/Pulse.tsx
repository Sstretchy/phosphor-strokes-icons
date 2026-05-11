import { createIcon } from "../create-icon.js";

export const Pulse = createIcon("pulse", [
  [
    "path",
    {
      d: "M1.875 10H4.375L7.5 3.125L12.5 16.25L15.625 10H18.125",
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

export default Pulse;
