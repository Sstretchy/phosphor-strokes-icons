import { createIcon } from "../create-icon.js";

export const Divide = createIcon("divide", [
  [
    "path",
    {
      d: "M3.125 10H16.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10.0005 5L10 5.0001L9.99951 5H10.0005Z",
      stroke: "currentColor",
      strokeWidth: 2.176,
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10.0005 15L10 15.0001L9.99951 15H10.0005Z",
      stroke: "currentColor",
      strokeWidth: 2.176,
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20,
  strokeWidthBase: 1.6
});

export default Divide;
