import { createIcon } from "../create-icon.js";

export const LessThanOrEqual = createIcon("less-than-or-equal", [
  [
    "path",
    {
      d: "M15.625 3.75L3.75 8.125L15.625 12.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M15.625 15.625H3.75",
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

export default LessThanOrEqual;
