import { createIcon } from "../create-icon.js";

export const VectorTwo = createIcon("vector-two", [
  [
    "path",
    {
      d: "M17.5 15H6.25V3.125",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M15 12.5L17.5 15L15 17.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M3.75 5.625L6.25 3.125L8.75 5.625",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default VectorTwo;
