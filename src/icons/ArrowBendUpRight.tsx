import { createIcon } from "../create-icon.js";

export const ArrowBendUpRight = createIcon("arrow-bend-up-right", [
  [
    "path",
    {
      d: "M13.75 11.875L17.5 8.125L13.75 4.375",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M2.5 15.625C2.5 13.6359 3.29018 11.7282 4.6967 10.3217C6.10322 8.91519 8.01087 8.125 10 8.125H17.5",
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

export default ArrowBendUpRight;
