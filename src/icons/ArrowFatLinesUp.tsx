import { createIcon } from "../create-icon.js";

export const ArrowFatLinesUp = createIcon("arrow-fat-lines-up", [
  [
    "path",
    {
      d: "M2.5 9.375L10 1.875L17.5 9.375H13.75V11.875H6.25V9.375H2.5Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M13.75 16.875H6.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M13.75 14.375H6.25",
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

export default ArrowFatLinesUp;
