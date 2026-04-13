import { createIcon } from "../create-icon.js";

export const X = createIcon("x", [
  [
    "path",
    {
      d: "M15.625 4.375L4.375 15.625",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M15.625 15.625L4.375 4.375",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default X;
