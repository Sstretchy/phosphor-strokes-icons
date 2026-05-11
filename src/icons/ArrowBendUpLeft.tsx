import { createIcon } from "../create-icon.js";

export const ArrowBendUpLeft = createIcon("arrow-bend-up-left", [
  [
    "path",
    {
      d: "M6.25 11.875L2.5 8.125L6.25 4.375",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M17.5 15.625C17.5 13.6359 16.7098 11.7282 15.3033 10.3217C13.8968 8.91519 11.9891 8.125 10 8.125H2.5",
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

export default ArrowBendUpLeft;
