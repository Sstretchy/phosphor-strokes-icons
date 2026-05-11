import { createIcon } from "../create-icon.js";

export const Steps = createIcon("steps", [
  [
    "path",
    {
      d: "M1.25 15.625H5.625V11.875H10V8.125H14.375V4.375H18.75",
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

export default Steps;
