import { createIcon } from "../create-icon.js";

export const WaveTriangle = createIcon("wave-triangle", [
  [
    "path",
    {
      d: "M1.875 10L5.9375 4.375L14.0625 15.625L18.125 10",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default WaveTriangle;
