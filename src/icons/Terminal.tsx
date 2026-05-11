import { createIcon } from "../create-icon.js";

export const Terminal = createIcon("terminal", [
  [
    "path",
    {
      d: "M3.125 5L8.75 10L3.125 15",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M9.375 15H16.875",
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

export default Terminal;
