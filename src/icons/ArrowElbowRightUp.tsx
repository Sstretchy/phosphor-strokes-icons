import { createIcon } from "../create-icon.js";

export const ArrowElbowRightUp = createIcon("arrow-elbow-right-up", [
  [
    "path",
    {
      d: "M9.375 7.5L13.125 3.75L16.875 7.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M1.875 15H13.125V3.75",
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

export default ArrowElbowRightUp;
