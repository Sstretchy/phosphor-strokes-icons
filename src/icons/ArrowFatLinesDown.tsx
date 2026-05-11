import { createIcon } from "../create-icon.js";

export const ArrowFatLinesDown = createIcon("arrow-fat-lines-down", [
  [
    "path",
    {
      d: "M2.5 10.625L10 18.125L17.5 10.625H13.75V8.125H6.25V10.625H2.5Z",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M13.75 3.125H6.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M13.75 5.625H6.25",
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

export default ArrowFatLinesDown;
