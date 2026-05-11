import { createIcon } from "../create-icon.js";

export const WaveSawtooth = createIcon("wave-sawtooth", [
  [
    "path",
    {
      d: "M1.875 10L10 5V15L18.125 10",
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

export default WaveSawtooth;
