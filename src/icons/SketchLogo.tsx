import { createIcon } from "../create-icon.js";

export const SketchLogo = createIcon("sketch-logo", [
  [
    "path",
    {
      d: "M5.625 3.125H14.375L18.75 8.125L10 17.5L1.25 8.125L5.625 3.125Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M13.75 8.125L10 17.5L6.25 8.125L10 3.125L13.75 8.125Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M1.25 8.125H18.75",
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

export default SketchLogo;
