import { createIcon } from "../create-icon.js";

export const GreaterThanOrEqual = createIcon("greater-than-or-equal", [
  [
    "path",
    {
      d: "M4.375 3.75L16.25 8.125L4.375 12.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M16.25 15.625H4.375",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default GreaterThanOrEqual;
