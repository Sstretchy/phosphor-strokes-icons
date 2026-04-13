import { createIcon } from "../create-icon.js";

export const ArrowElbowLeftDown = createIcon("arrow-elbow-left-down", [
  [
    "path",
    {
      d: "M10.625 13.125L6.875 16.875L3.125 13.125",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M18.125 5.625H6.875V16.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default ArrowElbowLeftDown;
