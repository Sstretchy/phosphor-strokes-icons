import { createIcon } from "../create-icon.js";

export const WaveSquare = createIcon("wave-square", [
  [
    "path",
    {
      d: "M18.125 10V14.375H10V5.625H1.875V10",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default WaveSquare;
