import { createIcon } from "../create-icon.js";

export const CodeSimple = createIcon("code-simple", [
  [
    "path",
    {
      d: "M6.875 5L1.25 10L6.875 15",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M13.125 5L18.75 10L13.125 15",
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

export default CodeSimple;
