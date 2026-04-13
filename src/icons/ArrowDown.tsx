import { createIcon } from "../create-icon.js";

export const ArrowDown = createIcon("arrow-down", [
  [
    "path",
    {
      d: "M16 5V27",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M7 18L16 27L25 18",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default ArrowDown;
