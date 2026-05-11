import { createIcon } from "../create-icon.js";

export const LineVertical = createIcon("line-vertical", [
  [
    "path",
    {
      d: "M10 1.875V18.125",
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

export default LineVertical;
