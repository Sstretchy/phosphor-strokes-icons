import { createIcon } from "../create-icon.js";

export const GreaterThan = createIcon("greater-than", [
  [
    "path",
    {
      d: "M5 4.375L16.875 10L5 15.625",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default GreaterThan;
