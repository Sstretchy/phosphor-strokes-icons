import { createIcon } from "../create-icon.js";

export const ArrowElbowLeftUp = createIcon("arrow-elbow-left-up", [
  [
    "path",
    {
      d: "M10.625 7.5L6.875 3.75L3.125 7.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M18.125 15H6.875V3.75",
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

export default ArrowElbowLeftUp;
