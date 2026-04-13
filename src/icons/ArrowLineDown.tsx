import { createIcon } from "../create-icon.js";

export const ArrowLineDown = createIcon("arrow-line-down", [
  [
    "path",
    {
      d: "M16 4V23",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M7 14L16 23L25 14",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ],
  [
    "path",
    {
      d: "M5 27H27",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ]
]);

export default ArrowLineDown;
