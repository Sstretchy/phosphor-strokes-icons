import { createIcon } from "../create-icon.js";

export const CaretLineUp = createIcon("caret-line-up", [
  [
    "path",
    {
      d: "M3.75 15L10 8.75L16.25 15",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M3.75 5.625H16.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default CaretLineUp;
