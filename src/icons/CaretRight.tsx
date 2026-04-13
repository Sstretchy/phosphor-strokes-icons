import { createIcon } from "../create-icon.js";

export const CaretRight = createIcon("caret-right", [
  [
    "path",
    {
      d: "M7.5 3.75L13.75 10L7.5 16.25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default CaretRight;
