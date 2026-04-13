import { createIcon } from "../create-icon.js";

export const ArrowUp = createIcon("arrow-up", [
  [
    "path",
    {
      d: "M16 27V5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M7 14L16 5L25 14",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default ArrowUp;
