import { createIcon } from "../create-icon.js";

export const ArrowRight = createIcon("arrow-right", [
  [
    "path",
    {
      d: "M5 16H27",
      stroke: "currentColor"
    }
  ],
  [
    "path",
    {
      d: "M18 7L27 16L18 25",
      stroke: "currentColor"
    }
  ]
]);

export default ArrowRight;
