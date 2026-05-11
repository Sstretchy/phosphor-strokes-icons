import { createIcon } from "../create-icon.js";

export const CopySimple = createIcon("copy-simple", [
  [
    "path",
    {
      d: "M14.375 5.625H3.125V16.875H14.375V5.625Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M5.625 3.125H16.875V14.375",
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

export default CopySimple;
