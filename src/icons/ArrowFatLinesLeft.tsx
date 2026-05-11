import { createIcon } from "../create-icon.js";

export const ArrowFatLinesLeft = createIcon("arrow-fat-lines-left", [
  [
    "path",
    {
      d: "M9.375 2.5L1.875 10L9.375 17.5V13.75H11.875V6.25H9.375V2.5Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M16.875 13.75V6.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M14.375 13.75V6.25",
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

export default ArrowFatLinesLeft;
