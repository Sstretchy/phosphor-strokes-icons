import { createIcon } from "../create-icon.js";

export const ArrowRight = createIcon("arrow-right", [
  [
    "path",
    {
      d: "M5 16H27",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M18 7L27 16L18 25",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default ArrowRight;
