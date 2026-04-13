import { createIcon } from "../create-icon.js";

export const CaretUp = createIcon("caret-up", [
  [
    "path",
    {
      d: "M3.75 12.5L10 6.25L16.25 12.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default CaretUp;
