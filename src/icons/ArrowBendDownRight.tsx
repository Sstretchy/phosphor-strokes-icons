import { createIcon } from "../create-icon.js";

export const ArrowBendDownRight = createIcon("arrow-bend-down-right", [
  [
    "path",
    {
      d: "M13.75 8.125L17.5 11.875L13.75 15.625",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M2.5 4.375C2.5 6.36413 3.29018 8.27175 4.6967 9.67831C6.10322 11.0848 8.01087 11.875 10 11.875H17.5",
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

export default ArrowBendDownRight;
