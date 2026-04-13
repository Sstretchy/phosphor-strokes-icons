import { createIcon } from "../create-icon.js";

export const ArrowElbowDownLeft = createIcon("arrow-elbow-down-left", [
  [
    "path",
    {
      d: "M7.5 10L3.75 13.75L7.5 17.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M15 2.5V13.75H3.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default ArrowElbowDownLeft;
