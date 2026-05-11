import { createIcon } from "../create-icon.js";

export const ArrowElbowUpLeft = createIcon("arrow-elbow-up-left", [
  [
    "path",
    {
      d: "M7.5 10L3.75 6.25L7.5 2.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M15 17.5V6.25H3.75",
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

export default ArrowElbowUpLeft;
