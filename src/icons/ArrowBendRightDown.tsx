import { createIcon } from "../create-icon.js";

export const ArrowBendRightDown = createIcon("arrow-bend-right-down", [
  [
    "path",
    {
      d: "M8.125 13.75L11.875 17.5L15.625 13.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M4.375 2.5C6.36413 2.5 8.27175 3.29018 9.67831 4.6967C11.0848 6.10322 11.875 8.01087 11.875 10V17.5",
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

export default ArrowBendRightDown;
