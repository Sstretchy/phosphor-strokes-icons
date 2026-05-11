import { createIcon } from "../create-icon.js";

export const Copy = createIcon("copy", [
  [
    "path",
    {
      d: "M13.125 13.125H16.875V3.125H6.875V6.875",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M13.125 6.875H3.125V16.875H13.125V6.875Z",
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

export default Copy;
