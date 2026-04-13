import { createIcon } from "../create-icon.js";

export const CaretDown = createIcon("caret-down", [
  [
    "path",
    {
      d: "M16.25 7.5L10 13.75L3.75 7.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default CaretDown;
