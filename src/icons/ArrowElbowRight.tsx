import { createIcon } from "../create-icon.js";

export const ArrowElbowRight = createIcon("arrow-elbow-right", [
  [
    "path",
    {
      d: "M12.5 6.25H18.125V11.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M1.875 7.5L9.375 15L18.125 6.25",
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

export default ArrowElbowRight;
