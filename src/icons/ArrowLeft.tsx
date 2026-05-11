import { createIcon } from "../create-icon.js";

export const ArrowLeft = createIcon("arrow-left", [
  [
    "path",
    {
      d: "M16.875 10H3.125",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M8.75 4.375L3.125 10L8.75 15.625",
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

export default ArrowLeft;
