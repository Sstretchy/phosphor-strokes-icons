import { createIcon } from "../create-icon.js";

export const ArrowElbowDownRight = createIcon("arrow-elbow-down-right", [
  [
    "path",
    {
      d: "M13.125 10L16.875 13.75L13.125 17.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M5.625 2.5V13.75H16.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default ArrowElbowDownRight;
