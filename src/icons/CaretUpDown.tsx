import { createIcon } from "../create-icon.js";

export const CaretUpDown = createIcon("caret-up-down", [
  [
    "path",
    {
      d: "M10 22L16 28L22 22",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M10 10L16 4L22 10",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default CaretUpDown;
