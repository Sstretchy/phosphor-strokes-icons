import { createIcon } from "../create-icon.js";

export const TreeEvergreen = createIcon("tree-evergreen", [
  [
    "path",
    {
      d: "M10 1.25L3.75 9.375H6.875L2.5 15H17.5L13.125 9.375H16.25L10 1.25Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10 15V18.75",
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

export default TreeEvergreen;
