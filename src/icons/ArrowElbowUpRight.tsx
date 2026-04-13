import { createIcon } from "../create-icon.js";

export const ArrowElbowUpRight = createIcon("arrow-elbow-up-right", [
  [
    "path",
    {
      d: "M13.125 10L16.875 6.25L13.125 2.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M5.625 17.5V6.25H16.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default ArrowElbowUpRight;
