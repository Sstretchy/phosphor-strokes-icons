import { createIcon } from "../create-icon.js";

export const ArrowElbowRightDown = createIcon("arrow-elbow-right-down", [
  [
    "path",
    {
      d: "M10 12.5L13.75 16.25L17.5 12.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M2.5 5H13.75V16.25",
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

export default ArrowElbowRightDown;
