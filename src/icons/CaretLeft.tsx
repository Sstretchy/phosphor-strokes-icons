import { createIcon } from "../create-icon.js";

export const CaretLeft = createIcon("caret-left", [
  [
    "path",
    {
      d: "M12.5 16.25L6.25 10L12.5 3.75",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
], {
  viewBox: "0 0 20 20",
  absoluteStrokeBase: 20
});

export default CaretLeft;
