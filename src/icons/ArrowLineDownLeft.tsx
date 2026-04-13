import { createIcon } from "../create-icon.js";

export const ArrowLineDownLeft = createIcon("arrow-line-down-left", [
  [
    "path",
    {
      d: "M3.75 3.75H17.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M5.625 16.25L14.375 7.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M5.625 8.75V16.25H13.125",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default ArrowLineDownLeft;
