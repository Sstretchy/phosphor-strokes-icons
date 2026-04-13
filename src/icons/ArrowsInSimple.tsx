import { createIcon } from "../create-icon.js";

export const ArrowsInSimple = createIcon("arrows-in-simple", [
  [
    "path",
    {
      d: "M11.25 5V8.75H15",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M16.25 3.75L11.25 8.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M5 11.25H8.75V15",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M3.75 16.25L8.75 11.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default ArrowsInSimple;
