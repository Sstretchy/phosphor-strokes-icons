import { createIcon } from "../create-icon.js";

export const ArrowsSplit = createIcon("arrows-split", [
  [
    "path",
    {
      d: "M7.5 14.375L5 16.875L2.5 14.375",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M17.5 14.375L15 16.875L12.5 14.375",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10 1.875V5.625L5 10.625V16.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10 5.625L15 10.625V16.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default ArrowsSplit;
