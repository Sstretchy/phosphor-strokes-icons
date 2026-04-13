import { createIcon } from "../create-icon.js";

export const ArrowElbowLeft = createIcon("arrow-elbow-left", [
  [
    "path",
    {
      d: "M7.5 6.25H1.875V11.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M18.125 7.5L10.625 15L1.875 6.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default ArrowElbowLeft;
